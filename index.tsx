import Header from "../components/Header";
import Layout from "../components/Layout";
import Categories from "../components/Categories";
import Recommended from "../components/Recommendation";
import ListPromo from "../components/ListPromo";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Header />
          <Categories />
            <Recommended />
          <ListPromo />
        </motion.div>
        </Layout>
      </>
  );
}
