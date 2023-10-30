import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "./";
import { v4 as uuidv4 } from "uuid";

export const addVisitor = async (source: any) => {
  const visitorId = window.localStorage.getItem("visitor-id");
  if (visitorId) {
    const q = doc(firestore, "Visitors", visitorId);
    const querySnapshot = await getDoc(q);
    if (querySnapshot.exists()) {
      const data = querySnapshot.data();
      const restaurantSnapshot = doc(firestore, "Visitors", visitorId);
      await setDoc(
        restaurantSnapshot,
        {
          ...data,
          count: data.count + 1,
          lastViewed: new Date().getTime(),
        },
        { merge: true }
      );
    } else {
      window.localStorage.removeItem("visitor-id");
      const data: any = await getInfo(source);
      const docRef = doc(firestore, "Visitors", data.id);
      await setDoc(docRef, data, { merge: true });
      window.localStorage.setItem("visitor-id", data.id);
    }
  } else {
    const data: any = await getInfo(source);
    const docRef = doc(firestore, "Visitors", data.id);
    await setDoc(docRef, data, { merge: true });
    window.localStorage.setItem("visitor-id", data.id);
  }
};

const getInfo = async (source: any) => {
  try {
    const userAgent = navigator.userAgent;
    if (!userAgent) throw new Error("Invalid User Agent Data");
    let userGeoData = await fetch("https://geolocation-db.com/json/");
    if (!userGeoData.ok) {
      throw new Error("Network response was not ok");
    }
    userGeoData = await userGeoData.json();
    if (!userGeoData) throw new Error("Invalid User Data");
    const userData = {
      id: uuidv4(),
      deviceInfo: userAgent,
      ...userGeoData,
      platform: window?.navigator?.platform,
      browser: getBrowserInformation(),
      timestamp: new Date().getTime(),
      lastViewed: new Date().getTime(),
      count: 1,
      source: source || "Direct",
    };
    return userData;
  } catch (e) {
    console.log("Error in Collecting User Data: ", e);
    return false;
  }
};

const getBrowserInformation = () => {
  let browserName;
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    browserName = "Opera";
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    browserName = "Edge";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    browserName = "Chrome";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    browserName = "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    browserName = "Firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.DOCUMENT_NODE == true
  ) {
    browserName = "IE";
  } else {
    browserName = "unknown";
  }

  return browserName;
};
