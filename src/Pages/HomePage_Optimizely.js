import React from "react";
import Navbar from "../Components/Basic-Component/Navbar";
import Carousel from "../Components/Basic-Component/Carousel";
import Footer from "../Components/Basic-Component/Footer";
import Category_box from "../Components/Basic-Component/Category_box";
import TopSelling_product from "../Components/Basic-Component/TopSelling_propduct";
import Top_Header from "../Components/Basic-Component/Top_Header";
import Subscribe from "../Components/Basic-Component/Subsrcibe";
import New_Product_Banner from "../Components/Basic-Component/New_Product_Banner";
import Full_width_section from "../Components/Basic-Component/Full_width_section";
import Shoes_Category from "../Components/Basic-Component/Shoes_Category";
import About from "../Components/Basic-Component/About";
// import {
//   createInstance,
//   OptimizelyProvider,
//   OptimizelyFeature,
//   withOptimizely,
//   OptimizelyExperiment,
//   OptimizelyVariation
// } from "@optimizely/react-sdk";

// const optimizely = createInstance({
//   sdkKey: "Jb17tYEoXQM47EbzrbGT45",
//   datafileOptions: {
//     updateInterval: 1000,
//     autoUpdate: true,
//     urlTemplate:
//       "https://cdn.optimizely.com/datafiles/Jb17tYEoXQM47EbzrbGT45.json"
//   }
// });
// const HomePage_Optimizely = () => {
//   //

//   const ExperimentComponent = () => {
//     return (
//       <OptimizelyExperiment experiment="HomePage_test">
//         <OptimizelyVariation variation="variation_1">
//           <Top_Header />
//           <Navbar />

//           <Carousel />
//           <Category_box />
//           <TopSelling_product />
//           <New_Product_Banner />
//           <Full_width_section />
//           <About />
//           <Shoes_Category />
//           <Subscribe />
//           <Footer />
//         </OptimizelyVariation>
//         <OptimizelyVariation variation="variation_2">
//           <Top_Header />
//           <Navbar />

//           <Full_width_section />
//           <Category_box />
//           <WrappedButton />
//           <TopSelling_product />
//           <New_Product_Banner />

//           <About />
//           <Shoes_Category />
//           <Subscribe />
//           <Footer />
//         </OptimizelyVariation>
//         <OptimizelyVariation default>
//           <Top_Header />
//           <Navbar />

//           <Shoes_Category />

//           <Category_box />
//           <TopSelling_product />
//           <New_Product_Banner />
//           <About />
//           <Full_width_section />

//           <Subscribe />
//           <Footer />
//         </OptimizelyVariation>
//       </OptimizelyExperiment>
//     );
//   };

//   return (
//     <div>
//       {
//         <OptimizelyProvider
//           optimizely={optimizely}
//           timeout={500}
//           user={{ id: window.userId, attributes: { plan_type: "bronze" } }}
//         >
//           <ExperimentComponent />
//         </OptimizelyProvider>
//       }
//       {}
//     </div>
//   );
// };
// function Button(props) {
//   function onClick(event) {
//     props.optimizely.track("Shop Now");
//   }

//   return <button onClick={onClick}>Shop Now</button>;
// }

// const WrappedButton = withOptimizely(Button);

// const styles = {
//   experience: {
//     margin: 0
//   }
// };

// export default HomePage_Optimizely;

import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature,
  withOptimizely,
  OptimizelyExperiment,
  OptimizelyVariation
} from "@optimizely/react-sdk";

function HomePage_Optimizely() {
  const visitors = [
    { userId: "alice" },
    { userId: "bob" },
    { userId: "charlie" },
    { userId: "don" }
  ];
  const ExperimentComponent = () => {
    return (
      <OptimizelyExperiment experiment="HomePage_test">
        <OptimizelyVariation variation="variation_1">
          <Top_Header />
          <Navbar />
          <WrappedButton />
          <Carousel />
          <Category_box />
          <TopSelling_product />
          <New_Product_Banner />
          <Full_width_section />
          <About />
          <Shoes_Category />
          <Subscribe />
          <Footer />
        </OptimizelyVariation>
        <OptimizelyVariation variation="variation_2">
          <Top_Header />
          <Navbar />

          <Full_width_section />
          <Category_box />
          <WrappedButton />
          <TopSelling_product />
          <New_Product_Banner />

          <About />
          <Shoes_Category />
          <Subscribe />
          <Footer />
        </OptimizelyVariation>
        <OptimizelyVariation default>
          <Top_Header />
          <Navbar />

          <Shoes_Category />

          <Category_box />
          <TopSelling_product />
          <New_Product_Banner />
          <About />
          <Full_width_section />

          <Subscribe />
          <Footer />
        </OptimizelyVariation>
      </OptimizelyExperiment>
    );
  };
  const experiences = visitors.map(visitor => {
    // Note: Normally only one instance of Optimizely is created with createInstance in an application
    // at the start of the applicaiton. However, this application simulates multiple experiences for educational
    // purposes
    const optimizely = createInstance({
      sdkKey: "Jb17tYEoXQM47EbzrbGT45",
      datafileOptions: {
        updateInterval: 1000,
        autoUpdate: true,
        urlTemplate:
          "https://cdn.optimizely.com/datafiles/Jb17tYEoXQM47EbzrbGT45.json"
      }
    });

    // Note: Normally OptimizelyProvider is only used once to wrap an entire application
    // But this app simulates multiple experiences for educational purposes
    return (
      <OptimizelyProvider optimizely={optimizely} user={{ id: visitor.userId }}>
        <ExperimentComponent />
      </OptimizelyProvider>
    );
  });

  return (
    <div>
      <pre>Welcome to Daily Deal, we have great deals!</pre>
      <pre>Let's see what the visitors experience!</pre>
      {experiences}
      <pre>
        Update the feature from the tutorial and refresh this page to show the
        updated visitor's experiences!
      </pre>
    </div>
  );
}

function Button(props) {
  function onClick(event) {
    props.optimizely.track("Shop Now");
  }

  return <button onClick={onClick}>Shop Now</button>;
}

const WrappedButton = withOptimizely(Button);

const styles = {
  experience: {
    margin: 50
  }
};

export default HomePage_Optimizely;
