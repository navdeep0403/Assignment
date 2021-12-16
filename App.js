import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetails from "./src/screens/ProductDetails";

const navigator = createStackNavigator(
  {
    Product: ProductScreen,
    Details : ProductDetails
  },
  {
    initialRouteName: "Product",
    defaultNavigationOptions: {
      header:false,
     
    },
  }
);

export default createAppContainer(navigator);
