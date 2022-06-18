import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAvenues,
  getPotential,
  getReason,
  getUsp,
} from "../Redux/Lists/action";
import "./Home.css";

export const Home = () => {
  const [business_stage, setBusinessStage] = useState("'business_stage'");
  const [name, setName] = useState("'name'");
  const [business_idea, setBusinessIdea] = useState("'business_idea'");
  const [age_of_establishment, setAgeOfEstablishment] = useState(0);
  const [primary_product_service_offered, setPrimaryProduct] = useState(
    "'primary_product_service_offered'"
  );
  const [offered_to, setOffered] = useState("'offered_to'");
  const [secondary_product_service_offered, setSecondary] = useState(
    "'secondary_product_service_offered'"
  );
  const [processed_products, setProcessed] = useState("'processed_products'");
  const [relevant_experience, setRelevant] = useState(0);
  const [skill_training, setSkill] = useState("'skill_training'");
  const [establishment_type, setEstablishmentType] = useState(
    "'establishment_type'"
  );
  const [business_area, setArea] = useState("'business_area'");
  const [business_locality, setLocality] = useState("'business_locality'");
  const [infra_ownership, setInfra] = useState("'infra_ownership'");
  const [city, setCity] = useState("'city'");
  const [establishment_area, setEstablishmentArea] = useState(
    "'establishment_area'"
  );
  const [market_research, setMarketResearch] = useState("'market_research'");
  const [primary_market, setPrimaryMarket] = useState("'primary_market'");
  const [customers, setCustomers] = useState("'customers'");
  const [seasonality, setSeason] = useState("'seasonality'");
  const [competition, setCompletion] = useState("'competition'");
  const [suppliers, setSupplier] = useState("'suppliers'");

  const dispatch = useDispatch();
  const { usp, reason_for_location, marketing_avenues, scaleup_potential } =
    useSelector((store) => store.List);

  return (
    <div className="MainContainer">
      <div className="LeftDiv">
        <div>
          <div>
            <p>Name</p>
          </div>
          <div>
            <input type="text" onInput={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <p>Business Idea</p>
          </div>
          <div>
            <input
              type="text"
              onInput={(e) => setBusinessIdea(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Stage of business</p>
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => setBusinessStage(e.target.value)}
            >
              <option value=""></option>
              <option value="Start-up">Start-up</option>
              <option value="Scale-up">Scale-up</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>
              Age of establishment (years) <br /> (Enter 0 if it is yet to
              start-up)
            </p>
          </div>
          <div>
            <input
              type="number"
              onInput={(e) => setAgeOfEstablishment(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Primary Products/Services offfered</p>
          </div>
          <div>
            <input
              type="text"
              onInput={(e) => setPrimaryProduct(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Offered to</p>
          </div>
          <div>
            <select name="" id="" onChange={(e) => setOffered(e.target.value)}>
              <option value=""></option>
              <option value="End_Customers">End_Customers</option>
              <option value="Wholesalers">Wholesalers</option>
              <option value="Distributors">Distributors</option>
              <option value="Retailers">Retailers</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Secondary Products/Services offfered</p>
          </div>
          <div>
            <input type="text" onInput={(e) => setSecondary(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <p>
              Processed products <br /> (Products you produce from the raw
              materials)
            </p>
          </div>
          <div>
            <input type="text" onInput={(e) => setProcessed(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <p>Years of relevant experience in this field</p>
          </div>
          <div>
            <input type="number" onInput={(e) => setRelevant(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <p>Skill training</p>
          </div>
          <div>
            <select name="" id="" onChange={(e) => setSkill(e.target.value)}>
              <option value=""></option>
              <option value="No formal skill training">
                No formal skill training
              </option>
              <option value="Has formal skill training and certicate">
                Has formal skill training and certicate
              </option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Unique Selling Proposition</p>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              value="the entrepreneur's experience in this field"
              onChange={(e) => {
                if (e.target.checked) {
                  usp.push(e.target.value);
                  dispatch(getUsp(usp));
                } else {
                  let count = 0;
                  usp.map((ele) => {
                    if (ele === "the entrepreneur's experience in this field") {
                      usp.splice(count, 1);
                      dispatch(getUsp(usp));
                    }
                    count++;
                  });
                }
              }}
            />
            the entrepreneur's experience in this field
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="innovative product/service"
              onChange={(e) => {
                if (e.target.checked) {
                  usp.push(e.target.value);
                  dispatch(getUsp(usp));
                } else {
                  let count = 0;
                  usp.map((ele) => {
                    if (ele === "innovative product/service") {
                      usp.splice(count, 1);
                      dispatch(getUsp(usp));
                    }
                    count++;
                  });
                }
              }}
            />
            innovative product/service
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="high profit margin"
              onChange={(e) => {
                if (e.target.checked) {
                  usp.push(e.target.value);
                  dispatch(getUsp(usp));
                } else {
                  let count = 0;
                  usp.map((ele) => {
                    if (ele === "high profit margin") {
                      usp.splice(count, 1);
                      dispatch(getUsp(usp));
                    }
                    count++;
                  });
                }
              }}
            />
            high profit margin
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="superior customer support"
              onChange={(e) => {
                if (e.target.checked) {
                  usp.push(e.target.value);
                  dispatch(getUsp(usp));
                } else {
                  let count = 0;
                  usp.map((ele) => {
                    if (ele === "superior customer support") {
                      usp.splice(count, 1);
                      dispatch(getUsp(usp));
                    }
                    count++;
                  });
                }
              }}
            />
            superior customer support
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="high demand in the target market (forward linkage)"
              onChange={(e) => {
                if (e.target.checked) {
                  usp.push(e.target.value);
                  dispatch(getUsp(usp));
                } else {
                  let count = 0;
                  usp.map((ele) => {
                    if (
                      ele ===
                      "high demand in the target market (forward linkage)"
                    ) {
                      usp.splice(count, 1);
                      dispatch(getUsp(usp));
                    }
                    count++;
                  });
                }
              }}
            />
            high demand in the target market (forward linkage)
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="abundant supply of raw materials (backward linkage)"
              onChange={(e) => {
                if (e.target.checked) {
                  usp.push(e.target.value);
                  dispatch(getUsp(usp));
                } else {
                  let count = 0;
                  usp.map((ele) => {
                    if (
                      ele ===
                      "abundant supply of raw materials (backward linkage)"
                    ) {
                      usp.splice(count, 1);
                      dispatch(getUsp(usp));
                    }
                    count++;
                  });
                }
              }}
            />
            abundant supply of raw materials (backward linkage)
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="wide range of products/services"
              onChange={(e) => {
                if (e.target.checked) {
                  usp.push(e.target.value);
                  dispatch(getUsp(usp));
                } else {
                  let count = 0;
                  usp.map((ele) => {
                    if (ele === "wide range of products/services") {
                      usp.splice(count, 1);
                      dispatch(getUsp(usp));
                    }
                    count++;
                  });
                }
              }}
            />
            wide range of products/services
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="robust value-chain of the business"
              onChange={(e) => {
                if (e.target.checked) {
                  usp.push(e.target.value);
                  dispatch(getUsp(usp));
                } else {
                  let count = 0;
                  usp.map((ele) => {
                    if (ele === "robust value-chain of the business") {
                      usp.splice(count, 1);
                      dispatch(getUsp(usp));
                    }
                    count++;
                  });
                }
              }}
            />
            robust value-chain of the business
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="frequency of customer visits"
              onChange={(e) => {
                if (e.target.checked) {
                  usp.push(e.target.value);
                  dispatch(getUsp(usp));
                } else {
                  let count = 0;
                  usp.map((ele) => {
                    if (ele === "frequency of customer visits") {
                      usp.splice(count, 1);
                      dispatch(getUsp(usp));
                    }
                    count++;
                  });
                }
              }}
            />
            frequency of customer visits
            <br />
          </div>
        </div>
        <div>
          <div>
            <p>Establishment type</p>
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => setEstablishmentType(e.target.value)}
            >
              <option value=""></option>
              <option value="Factory">Factory</option>
              <option value="Mill">Mill</option>
              <option value="Stall">Stall</option>
              <option value="Workshop">Workshop</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Centre">Centre</option>
              <option value="Farm">Farm</option>
              <option value="Plant">Plant</option>
              <option value="Processing Unit">Processing Unit</option>
              <option value="Shop">Shop</option>
              <option value="Vending cart">Vending cart</option>
              <option value="Manufacturing unit">Manufacturing unit</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Name of the area</p>
          </div>
          <div>
            <input type="text" onInput={(e) => setArea(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <p>Locality of business</p>
          </div>
          <div>
            <select name="" id="" onChange={(e) => setLocality(e.target.value)}>
              <option value=""></option>
              <option value="Urban">Urban</option>
              <option value="Rural">Rural</option>
              <option value="Stall">Stall</option>
              <option value="Semi-urban">Semi-urban</option>
              <option value="Slum">Slum</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Ownership of infrastructure</p>
          </div>
          <div>
            <select name="" id="" onChange={(e) => setInfra(e.target.value)}>
              <option value=""></option>
              <option value="Rented">Rented</option>
              <option value="Leased">Leased</option>
              <option value="Self-owned">Self-owned</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>City</p>
          </div>
          <div>
            <input type="text" onChange={(e) => setCity(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <p>
              Establishment area (in square feet) <br /> (Enter 0 if the
              establishment area is irrelevant)
            </p>
          </div>
          <div>
            <input
              type="number"
              onInput={(e) => setEstablishmentArea(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Reason for selecting this location</p>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              value="Nearness to market"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "Nearness to market") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            Nearness to market <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Good footfall"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "Good footfall") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            Good footfall <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Nearness to source of raw materials"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "Nearness to source of raw materials") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            Nearness to source of raw materials <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Nearness to targeted customer demographics"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "Nearness to targeted customer demographics") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            Nearness to targeted customer demographics <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Lesser competition around"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "Lesser competition around") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            Lesser competition around <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Access to permit/license of operate"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "Access to permit/license of operate") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            Access to permit/license of operate <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Nearness to suppliers"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "Nearness to suppliers") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            Nearness to suppliers <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Affordability (rent)"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "Affordability (rent)") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            Affordability (rent) <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="No rental overheads"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "No rental overheads") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            No rental overheads <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Other such factors"
              onChange={(e) => {
                if (e.target.checked) {
                  reason_for_location.push(e.target.value);
                  dispatch(getReason(reason_for_location));
                } else {
                  let count = 0;
                  reason_for_location.map((ele) => {
                    if (ele === "Other such factors") {
                      reason_for_location.splice(count, 1);
                      dispatch(getReason(reason_for_location));
                    }
                    count++;
                  });
                }
              }}
            />
            Other such factors <br />
          </div>
        </div>
        <div>
          <div>
            <p>Market research</p>
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => setMarketResearch(e.target.value)}
            >
              <option value=""></option>
              <option value="Not conducted">Not conducted</option>
              <option value="Market research has been conducted">
                Market research has been conducted
              </option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Primary market</p>
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => setPrimaryMarket(e.target.value)}
            >
              <option value=""></option>
              <option value="Local">Local</option>
              <option value="Regional">Regional</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Customers</p>
          </div>
          <div>
            <input type="text" onInput={(e) => setCustomers(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <p>Seasons of high sales</p>
          </div>
          <div>
            <select name="" id="" onChange={(e) => setSeason(e.target.value)}>
              <option value=""></option>
              <option value="Consistent sales across all seasons">
                Consistent sales across all seasons
              </option>
              <option value="Higher sales in festive seasons">
                Higher sales in festive seasons
              </option>
              <option value="High sales in cropping/cultivation season">
                High sales in cropping/cultivation season
              </option>
              <option value="High sales in peak seasons">
                High sales in peak seasons
              </option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Competition</p>
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => setCompletion(e.target.value)}
            >
              <option value=""></option>
              <option value="No similar goods/service provider in this locality">
                No similar goods/service provider in this locality
              </option>
              <option value="Only a few similar goods/service providers in this locality">
                Only a few similar goods/service providers in this locality
              </option>
              <option value="Many similar goods/service providers in this locality">
                Many similar goods/service providers in this locality
              </option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>List of Suppliers</p>
          </div>
          <div>
            <input type="text" onInput={(e) => setSupplier(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <p>Marketing avenues</p>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              value="Distribution of marketing material (pamphlets/flyers)"
              onChange={(e) => {
                if (e.target.checked) {
                  marketing_avenues.push(e.target.value);
                  dispatch(getAvenues(marketing_avenues));
                } else {
                  let count = 0;
                  marketing_avenues.map((ele) => {
                    if (
                      ele ===
                      "Distribution of marketing material (pamphlets/flyers)"
                    ) {
                      marketing_avenues.splice(count, 1);
                      dispatch(getAvenues(marketing_avenues));
                    }
                    count++;
                  });
                }
              }}
            />
            Distribution of marketing material (pamphlets/flyers) <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="storefront/business branding"
              onChange={(e) => {
                if (e.target.checked) {
                  marketing_avenues.push(e.target.value);
                  dispatch(getAvenues(marketing_avenues));
                } else {
                  let count = 0;
                  marketing_avenues.map((ele) => {
                    if (ele === "storefront/business branding") {
                      marketing_avenues.splice(count, 1);
                      dispatch(getAvenues(marketing_avenues));
                    }
                    count++;
                  });
                }
              }}
            />
            storefront/business branding <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Seasonal discounts and offers"
              onChange={(e) => {
                if (e.target.checked) {
                  marketing_avenues.push(e.target.value);
                  dispatch(getAvenues(marketing_avenues));
                } else {
                  let count = 0;
                  marketing_avenues.map((ele) => {
                    if (ele === "Seasonal discounts and offers") {
                      marketing_avenues.splice(count, 1);
                      dispatch(getAvenues(marketing_avenues));
                    }
                    count++;
                  });
                }
              }}
            />
            Seasonal discounts and offers <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Cross-promotion"
              onChange={(e) => {
                if (e.target.checked) {
                  marketing_avenues.push(e.target.value);
                  dispatch(getAvenues(marketing_avenues));
                } else {
                  let count = 0;
                  marketing_avenues.map((ele) => {
                    if (ele === "Cross-promotion") {
                      marketing_avenues.splice(count, 1);
                      dispatch(getAvenues(marketing_avenues));
                    }
                    count++;
                  });
                }
              }}
            />
            Cross-promotion <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Digital Marketing"
              onChange={(e) => {
                if (e.target.checked) {
                  marketing_avenues.push(e.target.value);
                  dispatch(getAvenues(marketing_avenues));
                } else {
                  let count = 0;
                  marketing_avenues.map((ele) => {
                    if (ele === "Digital Marketing") {
                      marketing_avenues.splice(count, 1);
                      dispatch(getAvenues(marketing_avenues));
                    }
                    count++;
                  });
                }
              }}
            />
            Digital Marketing <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="Word of mouth"
              onChange={(e) => {
                if (e.target.checked) {
                  marketing_avenues.push(e.target.value);
                  dispatch(getAvenues(marketing_avenues));
                } else {
                  let count = 0;
                  marketing_avenues.map((ele) => {
                    if (ele === "Word of mouth") {
                      marketing_avenues.splice(count, 1);
                      dispatch(getAvenues(marketing_avenues));
                    }
                    count++;
                  });
                }
              }}
            />
            Word of mouth <br />
          </div>
        </div>
        <div>
          <div>
            <p>Avenues of scaling up in future</p>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              value="increasing the variety of product/service offering"
              onChange={(e) => {
                if (e.target.checked) {
                  scaleup_potential.push(e.target.value);
                  dispatch(getPotential(scaleup_potential));
                } else {
                  let count = 0;
                  scaleup_potential.map((ele) => {
                    if (
                      ele ===
                      "increasing the variety of product/service offering"
                    ) {
                      scaleup_potential.splice(count, 1);
                      dispatch(getPotential(scaleup_potential));
                    }
                    count++;
                  });
                }
              }}
            />
            increasing the variety of product/service offering <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="expanding the current offering to other geographies"
              onChange={(e) => {
                if (e.target.checked) {
                  scaleup_potential.push(e.target.value);
                  dispatch(getPotential(scaleup_potential));
                } else {
                  let count = 0;
                  scaleup_potential.map((ele) => {
                    if (
                      ele ===
                      "expanding the current offering to other geographies"
                    ) {
                      scaleup_potential.splice(count, 1);
                      dispatch(getPotential(scaleup_potential));
                    }
                    count++;
                  });
                }
              }}
            />
            expanding the current offering to other geographies <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="opening more outlets"
              onChange={(e) => {
                if (e.target.checked) {
                  scaleup_potential.push(e.target.value);
                  dispatch(getPotential(scaleup_potential));
                } else {
                  let count = 0;
                  scaleup_potential.map((ele) => {
                    if (ele === "opening more outlets") {
                      scaleup_potential.splice(count, 1);
                      dispatch(getPotential(scaleup_potential));
                    }
                    count++;
                  });
                }
              }}
            />
            opening more outlets <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="growing the scale of operation"
              onChange={(e) => {
                if (e.target.checked) {
                  scaleup_potential.push(e.target.value);
                  dispatch(getPotential(scaleup_potential));
                } else {
                  let count = 0;
                  scaleup_potential.map((ele) => {
                    if (ele === "growing the scale of operation") {
                      scaleup_potential.splice(count, 1);
                      dispatch(getPotential(scaleup_potential));
                    }
                    count++;
                  });
                }
              }}
            />
            growing the scale of operation <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="building value-chain integrations"
              onChange={(e) => {
                if (e.target.checked) {
                  scaleup_potential.push(e.target.value);
                  dispatch(getPotential(scaleup_potential));
                } else {
                  let count = 0;
                  scaleup_potential.map((ele) => {
                    if (ele === "building value-chain integrations") {
                      scaleup_potential.splice(count, 1);
                      dispatch(getPotential(scaleup_potential));
                    }
                    count++;
                  });
                }
              }}
            />
            building value-chain integrations <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="other allied revenue streams"
              onChange={(e) => {
                if (e.target.checked) {
                  scaleup_potential.push(e.target.value);
                  dispatch(getPotential(scaleup_potential));
                } else {
                  let count = 0;
                  scaleup_potential.map((ele) => {
                    if (ele === "other allied revenue streams") {
                      scaleup_potential.splice(count, 1);
                      dispatch(getPotential(scaleup_potential));
                    }
                    count++;
                  });
                }
              }}
            />
            other allied revenue streams <br />
          </div>
        </div>
      </div>
      <div className="RightDiv">
        <div>
          <p>
            {name} is looking to {business_stage} their business of{" "}
            {business_idea}.
          </p>
        </div>
        <div>
          <p>
            This enterprise has been operational since {age_of_establishment}{" "}
            years and has been serving its customers since then.
          </p>
        </div>
        <div>
          <p>
            This establishment offers products/services like-{" "}
            {primary_product_service_offered} to {offered_to}.
          </p>
        </div>
        <div>
          <p>
            In addition, the enterprise shall also be involved in-{" "}
            {secondary_product_service_offered}
          </p>
        </div>
        <div>
          <p>
            Other products of the enterprise shall include- {processed_products}
          </p>
        </div>
        <div>
          <p>
            {name} has relevant experience of {relevant_experience} years in
            this field.
          </p>
        </div>
        <div>
          <p>The entrepreneur {skill_training} in this field of work.</p>
        </div>
        <div>
          <p>The enterprise is uniquely positioned because of its - </p>
          <ol>
            {usp.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ol>
        </div>
        <div>
          <p>
            The {establishment_type} is located in {business_locality} area of{" "}
            {city} in a {infra_ownership} property.
          </p>
        </div>
        <div>
          <p>The size of the establishment is {establishment_area} sq.ft.</p>
        </div>
        <div>
          <p>This locality is selected because of </p>
          <ol>
            {reason_for_location.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ol>
        </div>
        <div>
          <p>
            {market_research} and the range of products and target market has
            been identified after that.
          </p>
        </div>
        <div>
          <p>
            The enterprise shall focus on offering its products/services to{" "}
            {primary_market} markets.
          </p>
        </div>
        <div>
          <p>Our customers shall include - {customers}</p>
        </div>
        <div>
          <p>
            The nature of the business is such that we expect {seasonality}.
          </p>
        </div>
        <div>
          <p>Regarding competition, there are {competition}</p>
        </div>
        <div>
          <p>
            The enterprise shall procure goods/raw materials from {suppliers}.
          </p>
        </div>
        <div>
          <p>
            Our marketing avenues to reach the targeted customers shall include
            -
          </p>
          <ol>
            {marketing_avenues.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ol>
        </div>
        <div>
          <p>
            The various foreseeable avenues of scaling up and growing the
            business in the foreseeable future include -
          </p>
          <ol>
            {scaleup_potential.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
