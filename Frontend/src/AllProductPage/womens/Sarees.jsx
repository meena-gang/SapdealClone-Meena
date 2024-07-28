import styles from "./Sarees.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
//import { getProductData } from "../redux/action";
import SareesCard from "./Sarees.card";
import { Button } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-to-top";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sarees = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  // const dispatch = useDispatch();
  // const data = useSelector((store) => store);

  //   let products = data.MensReducer.data;
  console.log(products)
  useEffect(() => {
    axios
      .get("https://sapdealbackend-1.onrender.com/products/sarees")
      .then((res) => setProducts(res.data));
  }, []);
  const handleSort = () => {
    let sortedData = [...products];
    // console.log(sortedData);
    if (sortOption === "price-asc") {
      sortedData.sort((a, b) => a.offPrice - b.offPrice);
    } else if (sortOption === "price-desc") {
      sortedData.sort((a, b) => b.offPrice - a.offPrice);
    } else if (sortOption === "rating-desc") {
       sortedData.sort((a, b) => b.rating - a.rating);
    }

    setProducts(sortedData);
  };
  const handleSelect = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <div className={styles.trendingSearch}>
        <ul className={styles.mensTredingul}>
          <li>Treading Searches</li>
          <li>Shoes for men</li>
          <li>Sport Shoes for mens</li>
          <li>Saree</li>
          <li>tShirt</li>
          <li>Wall sticker</li>
          <li>Kurti set</li>
          <li>Kitchen products</li>
        </ul>
      </div>
      <div className={styles.sortdiv}>
        <select onChange={handleSelect} style={{border:"1px solid black",borderRadius:"5px",margin:"5px",padding:"1px"}}>
          <option value="">Sort by:</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low </option>
         <option value="rating-desc">Most Rated</option>
        </select>
        <Button
          variant="outline"
          width="100px"
          height="20px"
          colorScheme="teal"
          className={styles.sortbtn}
          onClick={handleSort}
          style={{padding:"10px"}}
        >
          Sort
        </Button>
      </div>
      <div className={styles.container}>
        {products?.map((item) => (
          <div key={item._id} className={styles.allDataGrid}>
            <Link to={`/products/${item._id}`}> <SareesCard {...item} /></Link>
          </div>
        ))}
      </div>
      <ScrollToTop
        smooth
        width="15"
        component={<BsArrowUpCircleFill color="#5A5A5A" size={40} />}
        color="grey"
      />
    </div>
  );
};
export default Sarees;
