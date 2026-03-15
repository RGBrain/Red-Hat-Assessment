"use server";

import configPromise from "@payload-config";
import { getPayload } from "payload";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const return_time_in_non_24_hour_format_with_am_pm = (ISOdate) => {
  const date = new Date(ISOdate);
  let time_to_return = String((date.getHours() + 24) % 12 || 12);
  time_to_return +=
    "." + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  time_to_return += date.getHours() > 11 ? "pm" : "am";

  return time_to_return;
};

const emailCSV = async (emailSubject, emailMessage, csvFilenamePrefix) => {
  // PAUSE TO ENSURE MOST RECENT SUBMISSION PRESENT ON PULL FROM 'FORM SUBMISSIONS' COLLECTION
  await sleep(10000);

  const payload = await getPayload({ config: configPromise });
  const formSubmissions = await payload.find({
    collection: "form-submissions",
    draft: false,
    limit: 1000,
    overrideAccess: true,
    pagination: true,
  });

  let csvFile = "";

  // *** ADD FIELD HEADINGS ***

  //First column: date
  csvFile += `date,`;

  // Each iteration is one fieldData
  for (let fieldData of formSubmissions.docs[0].submissionData) {
    if (fieldData.field === "agreement") {
      continue;
    }

    let fieldName = fieldData.field;

    // format fieldName into something more readable e.g. 'eventSelect' becomes 'Event Select'
    fieldName = fieldName.replace(/([A-Z])/g, " $1"); // add space before capital letters
    fieldName = (fieldName.charAt(0).toUpperCase() + fieldName.slice(1)).trim(); // capitalize first letter

    csvFile += `${fieldName},`;
  }

  csvFile = csvFile.slice(0, -1);

  // Add blank row below field Headings
  csvFile += `\n,,,,,,`;

  // Add submitted Form data to the csv File
  for (let submission of formSubmissions.docs) {
    // Each iteration is one form Submission (many fields) from one user
    csvFile += `\n`; // new line for each form submission

    // Add submitted date value
    var dateObj = new Date(submission.createdAt);

    var dateStr =
      dateObj.getDate() +
      "/" +
      (dateObj.getMonth() + 1) +
      "/" +
      dateObj.getFullYear().toString().slice(2) +
      " " +
      return_time_in_non_24_hour_format_with_am_pm(submission.createdAt); // + dateObj.getHours() + ":" + dateObj.getMinutes();

    // Example format: 16-5-2015 9:50

    csvFile += `${dateStr},`;

    // each iteration is an OBJECT - just one field e.g. 'eventSelect' or 'email'
    for (let fieldData of submission.submissionData) {
      if (fieldData.field === "agreement") {
        continue;
      }

      let fieldValue = fieldData.value;
      csvFile += `${fieldValue},`;
    }
    csvFile = csvFile.slice(0, -1);
  }

  // *** SEND EMAIL ***

  // TODAY'S DATE
  var nowObj = new Date();

  var nowDateStr =
    nowObj.getDate() +
    "-" +
    (nowObj.getMonth() + 1) +
    "-" +
    nowObj.getFullYear().toString().slice(2) +
    " " +
    return_time_in_non_24_hour_format_with_am_pm(nowObj.toISOString());

  const email = await payload.sendEmail({
    to: process.env.EMAIL_TO,
    subject: `${emailSubject} - ${nowDateStr}`,
    text: emailMessage,
    attachments: [
      {
        filename: `${csvFilenamePrefix}-${nowDateStr}.csv`,
        content: csvFile,
      },
    ],
  });

  await sleep(5000);

  console.log("CSV file emailed");
};

export default emailCSV;
