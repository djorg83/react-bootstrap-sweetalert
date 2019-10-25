import {CSSProperties} from "react";

export const overlay: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 5000
};

export const sweetAlertContainer: CSSProperties = {
  display: "flex",
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: ".625em",
  overflowX: "hidden",
  overflowY: "auto",
  zIndex: 5400
};

export const sweetAlert: CSSProperties = {
  display: "flex",
  overflow: "hidden",
  backgroundColor: "#fff",
  outline: "none",
  width: "32em",
  padding: "1.25rem",
  margin: "auto",
  borderRadius: ".3125em",
  textAlign: "center",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "100%",
  zIndex: 5600
};

export const title: CSSProperties = {
  position: "relative",
  maxWidth: "100%",
  margin: "0 0 .4em",
  padding: 0,
  color: "#595959",
  fontSize: "1.875em",
  fontWeight: 600,
  textAlign: "center",
  textTransform: "none",
  wordWrap: "break-word"
};
export const contentContainer: CSSProperties = {
  zIndex: 1,
  justifyContent: "center",
  margin: 0,
  padding: 0,
  color: "#545454",
  fontSize: "1.125em",
  fontWeight: 300,
  lineHeight: "normal",
  textAlign: "center",
  wordWrap: "break-word"
};
export const actions: CSSProperties = {
  display: "flex",
  zIndex: 1,
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: "1.25em auto 0"
};

export const icon: CSSProperties = {
  width: 80,
  height: 80,
  borderWidth: 4,
  borderStyle: "solid",
  borderColor: "gray",
  borderRadius: "50%",
  margin: "20px auto",
  position: "relative",
  boxSizing: "content-box"
};

export const iconError: CSSProperties = {
  borderColor: "#d43f3a",
  animation: "animateErrorIcon 0.5s"
};

export const iconErrorX: CSSProperties = {
  position: "relative",
  display: "block",
  animation: "animateXMark 0.5s"
};

export const iconErrorLine: CSSProperties = {
  position: "absolute",
  height: 5,
  width: 47,
  backgroundColor: "#d9534f",
  display: "block",
  top: 37,
  borderRadius: 2
};

export const iconErrorLineLeft: CSSProperties = {
  transform: "rotate(45deg)",
  left: 17
};

export const iconErrorLineRight: CSSProperties = {
  transform: "rotate(-45deg)",
  right: 16
};

export const iconWarning: CSSProperties = {
  borderColor: "#eea236",
  animation: "pulseWarning 0.75s infinite alternate"
};

export const iconWarningBody: CSSProperties = {
  position: "absolute",
  width: 5,
  height: 47,
  left: "50%",
  top: 10,
  borderRadius: 2,
  marginLeft: -2,
  backgroundColor: "#f0ad4e",
  animation: "pulseWarningIns 0.75s infinite alternate"
};

export const iconWarningDot: CSSProperties = {
  position: "absolute",
  width: 7,
  height: 7,
  borderRadius: "50%",
  marginLeft: -3,
  left: "50%",
  bottom: 10,
  backgroundColor: "#f0ad4e",
  animation: "pulseWarningIns 0.75s infinite alternate"
};

export const iconInfo: CSSProperties = {
  borderColor: "#46b8da"
};

export const iconInfoBefore: CSSProperties = {
  content: "",
  position: "absolute",
  width: 5,
  height: 29,
  left: "50%",
  bottom: 17,
  borderRadius: 2,
  marginLeft: -2,
  backgroundColor: "#5bc0de"
};

export const iconInfoAfter: CSSProperties = {
  content: "",
  position: "absolute",
  width: 7,
  height: 7,
  borderRadius: "50%",
  marginLeft: -3,
  left: "50%",
  top: 19,
  backgroundColor: "#5bc0de"
};

export const iconSuccess: CSSProperties = {
  borderColor: "#4cae4c"
};

export const iconSuccessBeforeAfter: CSSProperties = {
  content: "",
  borderRadius: "50%",
  position: "absolute",
  width: 60,
  height: 120,
  background: "white",
  transform: "rotate(45deg)"
};

export const iconSuccessBefore: CSSProperties = {
  borderRadius: "120px 0 0 120px",
  height: 100,
  top: -7,
  left: -33,
  transform: "rotate(-45deg)",
  transformOrigin: "60px 60px"
};

export const iconSuccessAfter: CSSProperties = {
  borderRadius: "0 120px 120px 0",
  top: -11,
  left: 30,
  transform: "rotate(-45deg)",
  transformOrigin: "0px 60px",
  animation: "rotatePlaceholder 4.25s ease-in"
};

export const iconSuccessPlaceholder: CSSProperties = {
  width: 80,
  height: 80,
  border: "4px solid rgba(92, 184, 92, 0.2)",
  borderRadius: "50%",
  boxSizing: "content-box",
  position: "absolute",
  left: -4,
  top: -4,
  zIndex: 2
};

export const iconSuccessFix: CSSProperties = {
  width: 5,
  height: 90,
  backgroundColor: "#fff",
  position: "absolute",
  left: 28,
  top: 8,
  zIndex: 1,
  transform: "rotate(-45deg)"
};

export const iconSuccessLine: CSSProperties = {
  height: 5,
  backgroundColor: "#5cb85c",
  display: "block",
  borderRadius: 2,
  position: "absolute",
  zIndex: 2
};

export const iconSuccessLineTip: CSSProperties = {
  width: 25,
  left: 14,
  top: 46,
  transform: "rotate(45deg)",
  animation: "animateSuccessTip 0.75s"
};

export const iconSuccessLineLong: CSSProperties = {
  width: 47,
  right: 8,
  top: 38,
  transform: "rotate(-45deg)",
  animation: "animateSuccessLong 0.75s"
};

export const iconCustom: CSSProperties = {
  backgroundSize: "contain",
  borderRadius: 0,
  border: "none",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat"
};

export const button: CSSProperties = {
  marginRight: 8,
};

export const validationMessage: CSSProperties = {
  display: "block",
  backgroundColor: "#f1f1f1",
  marginLeft: "-1.25rem",
  marginRight: "-1.25rem",
  marginTop: 20,
  overflow: "hidden",
  padding: 10,
  maxHeight: 100,
  transition: "padding 0.25s, max-height 0.25s",
  color: "#797979",
  fontSize: 16,
  textAlign: "center",
  fontWeight: 300
};

export const exclamationIcon: CSSProperties = {
  display: "inline-block",
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: "#ea7d7d",
  color: "white",
  lineHeight: "24px",
  textAlign: "center",
  marginRight: 5
};

export const inputErrorIcon: CSSProperties = {
  position: "absolute",
  top: 8,
  right: 8,
  width: 20,
  height: 20,
  transformOrigin: "50% 50%",
  transition: "all 0.1s",
  opacity: 1,
  transform: "scale(1)"
};

export const inputErrorIconBeforeAfter: CSSProperties = {
  content: "",
  width: 20,
  height: 6,
  backgroundColor: "#f06e57",
  borderRadius: 3,
  position: "absolute",
  top: "50%",
  marginTop: -4,
  left: "50%",
  marginLeft: -9
};

export const inputErrorIconBefore: CSSProperties = {
  transform: "rotate(-45deg)"
};

export const inputErrorIconAfter: CSSProperties = {
  transform: "rotate(45deg)"
};

export const closeButton: CSSProperties = {
  position: "absolute",
  right: 4,
  top: -2,
  fontSize: 25,
  fontWeight: 900,
  color: "rgb(113, 113, 113)"
};
