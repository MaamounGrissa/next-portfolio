const classes = {
    section: {
      marginTop: 2,
      marginBottom: 3,
    },
    main: {
      marginTop: 2,
      minHeight: "100vh",
    },
    footer: {
      marginTop: 3,
      textAlign: "center",
      backgroundColor: "#011233",
      color: "white",
      backgroundImage: "url(/images/bg-footer.png)",
      backgroundSize: "contain",
      backgroundPosition: "center right",
      backgroundRepeat: "no-repeat",
      padding: "40px",
    },
    powered: {
      marginRight: '15px', 
      color: '#FFF', 
      fontSize: '1.3rem',
      TextTransform: 'uppercase',
    },
    appbar: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "none",
      padding: "10px 20px",
      transition: "all 0.8s linear",
      "& a": {
        color: "#ffffff",
        marginLeft: 1,
      },
    },
    colored: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "none",
      padding: "10px 20px",
      transition: "all 0.8s linear",
      "& a": {
        color: "#ffffff",
        marginLeft: 1,
      },
      backgroundColor: "#000a1d",
    },
    toolbar: {
      justifyContent: "space-between",
    },
    navbarContainer: {
      width: "70%",
      padding: "6px 20px",
      backgroundColor: "rgba(245, 245, 245, 0.4)",
      borderRadius: "30px",
    },
    navbarMenu: {
      display: "flex",
      maxWidth: "1265px",
    },
    menuTitle: {
      color: "#FFF",
      fontFamily: `"CairoRegular", sans-serif`,
      fontWeight: "100",
      fontSize: "0.9rem",
      textTransform: "uppercase",
      marginRight: "1rem",
      letterSpacing: "2px",
      cursor: "pointer",
      transition: "all 0.5s linear",
      '&:hover': {
        color: "#f700c4",
      },
    },
    menuTitleMobile: {
      color: "#333",
      margin: "25px 60px 25px 20px"
    },
    closeIcon: {
      position: "absolute",
      right: "15px",
      top: "15px",
    },
    navbarButton: {
      color: "#ffffff",
      textTransform: "initial",
    },
    sort: {
      marginRight: 1,
    },
    visible: {
      //  display: "initial",
      display: "flex",
      flexDirection: "column",
    },
    hidden: {
      display: "none",
    },
    searchForm: {
        display: "flex",
        alignItems: "flex-start",
    },
    searchInput: {
        color: "#FFF",
        width: "120px",
        marginTop: "-2px",
        "& input": {
          color: "#FFF",
        },
    },
    searchButton: {
        marginTop: "10px",
    },
    Icons: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      width: "15px",
      height: "15px",
    },
  
    /* categories   */
  
    grid: {
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
    },
  
    /* footer*/
  
    items: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "100px",
      textAlign: "left",
      paddingTop: "25px",
    },
    title: {
      fontFamily: `'Lato', sans-serif`,
      textDecoration: "underline",
      fontWeight: 700,
      fontSize: "25px",
      letterSpacing: "0.015em",
      textTransform: "uppercase",
      color: "#FFFFFF",
    },
  
    description: {
      fontFamily: `'Lato', sans-serif`,
      fontWeight: 400,
      fontSize: "14px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#FFFFFF",
      paddingTop: "2px",
    },
  
    socialMedia: {
      paddingTop: "20px",
    },
    btnInscription: {
      fontFamily: `'Lato', sans-serif`,
      fontWeight: 700,
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.015em",
      textTransform: "uppercase",
      color: "#B7572A",
      backgroundColor: "#FFFFFF",
      border: "none",
      padding: "9px 22px",
      maxWidth: "150px",
      marginTop: "15px",
    },
  
    socialImg: {
      paddingRight: "5px",
      cursor: "pointer",
     
    },
  };
  
  export default classes;
  