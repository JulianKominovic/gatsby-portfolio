export const sendMail = ({ name, mail, reason }) => {
  return fetch("https://formsubmit.co/ajax/juliankominovic@gmail.com", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      mail: mail,
      message: reason,
      _template: "table",
      _subject: "Mail desde el portfolio!",
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res)
    .catch((err) => console.log(err));
};
