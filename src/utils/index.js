import { default as MailSlurp } from "mailslurp-client";
import axios from "axios";

const apiKey =
  "fd071e7d8a888221af67ffeca34542bb4ca73b8706961092c978786018e85f8b";
const mailSlurp = new MailSlurp({ apiKey });

export const createInbox = async () => {
  try {
    const { emailAddress, id } = await mailSlurp.createInbox();
    return {
      emailAddress,
      id
    };
  } catch (e) {
    console.error(e);
  }
};

export const listAllInboxes = async () => {
  try {
    const inboxes = await mailSlurp.getInboxes();
    return {
      inboxes
    };
  } catch (e) {
    console.error(e);
  }
};

export const watchEmail = async (fromId, fwdAddress) => {
  try {
    // const { emailId } = await mailSlurp.waitForLatestEmail(fromId, 999999);
    // await mailSlurp.sendEmail(fromId, {
    //   to: [fwdAddress],
    //   subject,
    //   body
    // });
    forwardEmail("13219040-493a-49b0-a2f2-069e65bbd8ee");
  } catch (e) {
    console.error(e);
  }
};

export const forwardEmail = async emailId => {
  await axios({
    method: "post",
    url: `https://api.mailslurp.com/emails/${emailId}/forward`,
    headers: { "x-api-key": apiKey },
    data: {
      forwardEmailOptions: {
        to: ["natejchotemp@gmail.com"]
      }
    }
  });
};
