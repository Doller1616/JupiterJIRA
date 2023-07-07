export const inputStyle = {
    fontWeight: 'bold',
    height: '50px',
    maxHeight: '100%',
    // borderTop: 'none',
    // borderLeft: 'none',
    // borderRight: 'none',
    borderRadius: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    wordWrap: 'break-word'
  };
   
  export const messageBoxStyle = (isSender) => ({
    padding: '10px',
    backgroundColor: isSender ? '#2db7f5' : '#f4faff',
    color: isSender ? "white" : "black",
    borderRadius: isSender ? '10px 10px 0px 10px' : '10px 10px 10px 0px',
    // color: '#333',
    alignSelf: isSender ? 'flex-end' : 'flex-start',
    marginBottom: '0px',
    overflowY: "auto",
    wordWrap: 'break-word',
    marginRight: "0px",
    marginLeft: isSender ? "15px" : "15px",
    marginTop: isSender ? '' : "1px",
    // position:isSender?"":"absolute",
  
    // marginTop:"50px"
    height: "max-content",
    paddingTop: "15px",
    marginTop: "60px"
  });

  export const chatStyle = {
    height: '90%',
    width: "100%",
    overflowY: 'auto',
    paddingLeft: '10px',
    paddingRight: '10px',
  
  };

  export const mainRow={ 
    height: '100%',
    width:"100%",
     display: 'flex',
     marginRight:"100px",
      flexDirection: 'column' }

export const msgBox= (isSender)=>({
    display: "flex",
    flexDirection: isSender ? "row" : "row-reverse",
    justifyContent: "space-between"
  })

  export const timeStyle=(isSender)=>(
    { marginLeft: '18px', marginTop: "5px", fontSize: '10px', float: "", color: isSender ? "#b2bec3" : "#0984e3" }
  )

  export const avatarStyle={
    height: "50px", marginRight: "0px", marginTop: "", borderRadius: "20%" 
  }