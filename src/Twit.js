import Twit from "twit";
import { twitterApp } from "../config.js";
const T = new Twit(twitterApp);

export default T;