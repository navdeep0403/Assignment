import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer PCVivUS4FPcp56dux1Z6yck0ySeNAMIrrdBOFDAKcH9oKb_tmKQH0dS9ZRszzqMHvoHpIg9W2f6Dy3gOYODc2w9XLdiUjmSkklaRD-1zNiRTGnK39j02brCQymWvYXYx",
  },
});
