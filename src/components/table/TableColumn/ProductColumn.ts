
// export const namesArray = rowsData.map(
//     ({
//       name,
//       totalMoneyRaised,
//       status,
//       OrganizationDocument,
//       Organization,
//       createdAt,id
//     }) => {
//       // Destructure OrganizationDocument with a default value
//       // const { orgFile: tax = null } = OrganizationDocument || {};

//       const { orgFile } = OrganizationDocument || {};


//       // const tax = orgFile ? `<a href="${orgFile}" download><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.293 2.293L8 8.586 1.707 2.293A1 1 0 0 0 .293 3.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414z" fill="#000" fill-rule="nonzero"/></svg></a>` : null;
//       const tax = orgFile ? `${orgFile}` : null;

//       const group = Organization ? Organization.name : null;
//       // Convert createdAt to normal date format
//       const createdAtDate = new Date(createdAt);

//       // Format createdAtDate to a readable format
//       const formattedCreatedAt = createdAtDate.toLocaleDateString("en-US", {
//         timeZone: "UTC",
//       });

//       // Check if totalMoneyRaised is null or not
//       let paid = totalMoneyRaised !== null ? "yes" : "-";
//       // let group = orgName !== null ? 'yes' : '-';

//       let donation = totalMoneyRaised !== null ? "$" + totalMoneyRaised : "-";

//       return {
//         name,
//         donation,
//         status,
//         tax,
//         paid,
//         group,
//         date: formattedCreatedAt,
//         id
//       };
//     }
//   );