import { GlueStick } from "gluestick-elements";
import "gluestick-elements/dist/index.css";

import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default function App() {
  return (
      <div>
        <div style={{ padding: 10 }}>
          <p>
            This demo shows how you can use gluestick to offer intuitive
            spreadsheet uploads and mapping.
          </p>
          <a
              href="/sample.csv"
              download
          >
            Download a sample file here.
          </a>
        </div>
        <GlueStick
            user={"default"}
            onImport={(user, filename) => {
              Swal.fire(
                  `Data imported`,
                  `Your data has been imported successfully. Thanks for completing the gluestick demo!`,
                  "success"
              );
            }}
            endpoint={"http://localhost:8001"}
            schema={{
              fields: [
                {
                  col: "Address",
                  key: "address"
                },
                {
                  col: "City",
                  key: "city"
                },
                {
                  col: "Company Name",
                  key: "companyName"
                },
                {
                  col: "Contact Phone",
                  key: "contactPhone",
                  validator: /^"(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}"$|^""$/
                      .source
                },
                {
                  col: "Country",
                  key: "country"
                },
                {
                  col: "Postcode",
                  key: "postcode",
                  validator: /^"\d{4,6}"$|^""$/
                    .source
                },
                {
                  col: "Tax ID",
                  key: "taxId"
                },
                {
                  col: "VAT ID",
                  key: "vatId"
                },
                {
                  col: "Vendor ID",
                  key: "vendorId",
                  validator: /^"S-\d{6}"$|^"\d{6}"$/
                    .source
                },
                {
                  col: "Vendor Text",
                  key: "vendorText"
                }
              ]
            }}
        />
      </div>
  );
}
