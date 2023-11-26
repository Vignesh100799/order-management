import axios from "axios";
import React, { useEffect, useState } from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const [pricing, setPricing] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPrice = async () => {
      try {
        const cardData = await axios.get(
          "https://655e29389f1e1093c59a9ffc.mockapi.io/Package"
        );
        setPricing([...cardData.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPrice();
  });

  return (
    <section className="bg-light py-5 border-bottom">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder">Pay as you grow</h2>
          <p className="lead mb-0">With our no hassle pricing plans</p>
        </div>
        <div className="row gx-5 justify-content-center">
          {loading ? (
            <div className="h1 text-center">Loading...</div>
          ) : (
            pricing.map((list, index) => {
              return <PriceCard key={index} details={list} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
