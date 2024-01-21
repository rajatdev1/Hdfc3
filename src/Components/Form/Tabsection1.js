import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,FormGroup, Checkbox, FormControlLabel,
  FormLabel,IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { Radio, RadioGroup } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const useStyles = makeStyles((theme) => ({
  accordionHeader: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontWeight: 'bold',
  },

  submitButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  // Additional custom styles...

  
}));


const Tabsection1 = ({ onNext }) => {

    const [merchantExpanded, setMerchantExpanded] = useState(true); // State for Merchant Organization Information
    const [qsaExpanded, setQsaExpanded] = useState(true); // State for Qualified Security Assessor Information
    const [country, setCountry] = useState('India');
  const [state, setState] = useState('');
  const [parentAccordionExpanded, setParentAccordionExpanded] = useState(true);
  const [isFormEditable, setIsFormEditable] = useState(false);
  const [isQsaAccordionExpanded, setIsQsaAccordionExpanded] = useState(true);
  const classes = useStyles();


//  ................................part 2 code states........................................

const [businessExpanded, setBusinessExpanded] = useState(true); 
const [expanded, setExpanded] = useState(false);
const [applications, setApplications] = useState([
  { name: '', version: '', vendor: '', isListed: null, expiryDate: '' },
]);
const [rows, setRows] = useState([
  
  // Start with one empty row
  { type: '', number: '', location: '' },
]);
const [usesPaymentApps, setUsesPaymentApps] = useState('');
const [networkSegmentation, setNetworkSegmentation] = useState('');
const [useQIR, setUseQIR] = useState('');
const [shareData, setShareData] = useState('');
const [serviceProviders, setServiceProviders] = useState([
  { name: '', description: '' },
]);
const [expandedPanel, setExpandedPanel] = useState(null);


// ..............................................part 3...................................
const [signatureImage, setSignatureImage] = useState(null);

const handleSignatureChange = (event) => {
  setSignatureImage(URL.createObjectURL(event.target.files[0]));
};






  
  const handleParentAccordionToggle = () => {
    setParentAccordionExpanded(!parentAccordionExpanded);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation and processing here

    // Call the onNext function passed from Mainform to move to the next tab
    onNext('tab2');
  };
  
    const handleMerchantAccordionToggle = () => {
      setMerchantExpanded(!merchantExpanded);
    };
  
    const handleQsaAccordionToggle = () => {
      setQsaExpanded(!qsaExpanded);
    };
  
    const accordionStyle = {
        width: '100%', // Ensure full width
        marginTop: '15px', 
       
      };

      const handleCountryChange = (event) => {
        setCountry(event.target.value);
        // Reset state when country changes
        setState('');
      };
    
      const handleStateChange = (event) => {
        setState(event.target.value);
      };
        // Sample list of states for India (add more as needed)
  const indianStates = [
    'Bihar',
    'Uttar Pradesh',
    'Andhra Pradesh',
    'Maharashtra',
    'Karnataka',
    // ... other states
  ];




  //   ..................................part 2 code (function and styles)...................................

  

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  const handleAddRow = () => {
    const newRow = { type: '', number: '', location: '' };
    setRows([...rows, newRow]);
  };


  const handleInputChange = (e, index, field) => {
    const newRows = [...rows];
    newRows[index][field] = e.target.value;
    setRows(newRows);
  };

  const handleAccordionToggle = () => {
    setBusinessExpanded(!businessExpanded);
  }

 




  
    const handleCheckboxChange = (index, value) => {
      // Set the selected checkbox and make sure the other one is unchecked
      setApplications(applications.map((app, i) => {
        if (i === index) {
          return { ...app, isListed: value };
        }
        return app;
      }));
    };
  
    const handleInputChange1 = (e, index, field) => {
      const newApplications = [...applications];
      newApplications[index][field] = e.target.value;
      setApplications(newApplications);
    };
  
    const addApplicationRow = () => {
      setApplications([...applications, { name: '', version: '', vendor: '', isListed: null, expiryDate: '' }]);
    };


    const handleAddServiceProvider = () => {
      setServiceProviders([...serviceProviders, { name: '', description: '' }]);
    };
  
    const handleServiceProviderChange = (index, field, value) => {
      const updatedProviders = [...serviceProviders];
      updatedProviders[index][field] = value;
      setServiceProviders(updatedProviders);
    };

    const handleRemoveRow = (index) => {
        const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
        setRows(newRows);
      };
      
      const handleRemoveApplication = (index) => {
        const newApplications = applications.filter((_, appIndex) => appIndex !== index);
        setApplications(newApplications);
      };
      
  

    
    // styles .................................................................................................................


  const formStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    // backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    marginBottom: '10px',
  };

  const checkboxGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  };

  const checkboxStyle = {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#fff',
    padding: '10px',
    // border: '1px solid #ccc',
    borderRadius: '4px',
  };
  const formSectionStyle = {
    // backgroundColor: '#f2f2f2',
    padding: '20px',
    marginBottom: '10px',
  };

  const checkboxContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  };

  const checkboxLabelStyle = {
    display: 'block',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
  };;

  const noteStyle = {
    backgroundColor: 'lightyellow',
    borderLeft: '5px solid #ffeb3b',
    padding: '10px',
    marginTop: '20px',
  };
  const inputTextStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box', // So padding doesn't add to the width
  };


  // Style object for the accordion details
  const detailsStyle = {
    padding: '20px',
    borderTop: '1px solid #000', // This creates the black border line seen in the image
  };


    
  return (

    <>

<Box sx={{ display: 'flex', flexDirection: 'column', '& > :not(style)': { m: 1 } }}>
        {/* Parent Accordion */}
        <Accordion expanded={parentAccordionExpanded} onChange={handleParentAccordionToggle} sx={{ width: '100%', marginTop: '15px' }}>
          <AccordionSummary className={classes.accordionHeader} expandIcon={<ExpandMoreIcon />} aria-controls="parent-panel-content" id="parent-panel-header">
            <Typography variant="h5" component="h1" gutterBottom sx={{ color: 'text.secondary', my: 2 }}>
             Part 1: Merchant and Qualified Security Assessor Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>


    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      '& > :not(style)': { m: 1 },
      
    }}
  >
    <Accordion expanded={merchantExpanded} onChange={handleMerchantAccordionToggle} sx={accordionStyle}>
          <AccordionSummary  className={classes.accordionHeader}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="merchant-panel-content"
            id="merchant-panel-header"
          >

        <Typography
          variant="h5" // Adjust the variant as needed
          component="h1" // The semantic element to be used
          gutterBottom // Adds a bottom margin to the Typography
          sx={{
            color: 'text.secondary', // Attractive light black color
            my: 2, // Margin top and bottom, adjust as needed
          }}
        >
         1.A: Merchant Organization Information

        </Typography>
        </AccordionSummary>
        <AccordionDetails>

        

     
   <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField className={classes.formField}
            fullWidth
            id="company-name"
            label="Company Name"
            helperText=" " // Blank helper text to align fields
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="dba"
            label="DBA (doing business as)"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="contact-name"
            label="Contact Name"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="title"
            label="Title"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="telephone"
            label="Telephone"
            helperText=" "
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="email"
            label="E-mail"
            helperText=" "
          />
        </Grid>

        <Grid item xs={12} md={4}>
<TextField
         fullWidth
         id="country"
         label="Country"
         helperText=" "
         value={country}
         onChange={handleCountryChange}
       />
</Grid>


<Grid item xs={12} md={4}>
<FormControl fullWidth>
            <InputLabel id="state-province-label">State/Province</InputLabel>
            <Select
              labelId="state-province-label"
              id="state-province"
              value={state}
              label="State/Province"
              onChange={handleStateChange}
              disabled={country !== 'India'} // Disable if country is not India
            >
              {indianStates.map((indianState, index) => (
                <MenuItem key={index} value={indianState}>
                  {indianState}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="city"
        label="City"
        helperText=" "
        
/>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="Zipcode"
        label="Zipcode"
        helperText=" "
/>
</Grid>


        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="business-address"
            label="Business Address"
            helperText=" "
          />
        </Grid>


  
<Grid item xs={12} md={4}>
<TextField
         fullWidth
         id="url"
         label="URL"
         helperText=" "
       />
</Grid>
</Grid>

</AccordionDetails>
      </Accordion>
</Box>






<Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      '& > :not(style)': { m: 1 },
      
    }}
  >
{/* 
<Accordion
  expanded={isQsaAccordionExpanded}
  onChange={() => setIsQsaAccordionExpanded(!isQsaAccordionExpanded)}
  sx={accordionStyle}
>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="qsa-panel-content"
            id="qsa-panel-header"
          >

        <Typography
          variant="h5" // Adjust the variant as needed
          component="h1" // The semantic element to be used
          gutterBottom // Adds a bottom margin to the Typography
          sx={{
            color: 'text.secondary', // Attractive light black color
            my: 2, // Margin top and bottom, adjust as needed
          }}
        >
         1.B: Qualified Security Assessor Company Information (if applicable)


        </Typography>
        <FormControlLabel
    control={
        <Checkbox
          checked={isFormEditable}
          onChange={(e) => setIsFormEditable(e.target.checked)}
          onClick={(e) => e.stopPropagation()} // Prevent the event from affecting the accordion
        />
      }
    label="Edit"
    sx={{ marginLeft: '5px', alignItems:'center' }} // Position the checkbox to the right
  />
        </AccordionSummary>
        <AccordionDetails>

        

     
   <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="company-name"
            label="Company Name"
            helperText=" " // Blank helper text to align fields
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="QSA"
            label="Lead QSA Contact Name:"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="contact-name"
            label="Contact Name"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="title"
            label="Title"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="telephone"
            label="Telephone"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="email"
            label="E-mail"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>

        <Grid item xs={12} md={4}>
        <TextField
            fullWidth
            id="country"
            label="Country"
            value={country}
            onChange={handleCountryChange}
            helperText=" "
            disabled={!isFormEditable}
          />
</Grid>


<Grid item xs={12} md={4}>
<FormControl fullWidth >
            <InputLabel id="state-province-label">State/Province</InputLabel>
            <Select
              labelId="state-province-label"
              id="state-province"
              value={state}
              label="State/Province"
              onChange={handleStateChange}
          
              disabled={!isFormEditable}
            >
              {indianStates.map((indianState, index) => (
                <MenuItem key={index} value={indianState}>
                  {indianState}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="city"
        label="City"
        helperText=" "
        disabled={!isFormEditable}
/>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="Zipcode"
        label="Zipcode"
        helperText=" "
        disabled={!isFormEditable}
/>
</Grid>


        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="business-address"
            label="Business Address"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>


  
<Grid item xs={12} md={4}>
<TextField
         fullWidth
         id="url"
         label="URL"
         helperText=" "
         disabled={!isFormEditable}
       />
</Grid>
</Grid>
</AccordionDetails>
      </Accordion> */}



      
</Box>
</AccordionDetails>
        </Accordion>
        </Box>



{/* .........................................../* part 2 jsx code ................................................  */}


<Box sx={{ display: 'flex', flexDirection: 'column', '& > :not(style)': { m: 1 } }}>

<Accordion sx={{ width: '100%', marginTop: '15px' }}>
          <AccordionSummary  className={classes.accordionHeader} expandIcon={<ExpandMoreIcon />} aria-controls="executive-summary-content" id="executive-summary-header">
            <Typography variant="h5" component="h1" gutterBottom sx={{ color: 'text.secondary', my: 2 }}>
            Part 2: Executive Summary
            </Typography>
          </AccordionSummary>
          <AccordionDetails>

          <div className="form-container" >


       {/* <Accordion expanded={businessExpanded} onChange={handleAccordionToggle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

<h2 style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>2.A: Type of Merchant Business (check all that apply)</h2>
</AccordionSummary>
        <AccordionDetails>
      <form style={formStyle}>
    
        <div style={checkboxGroupStyle}>

          <div style={checkboxStyle}>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="retailer" />
              Retailer
            </label>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="telecommunication" />
              Telecommunication
            </label>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="grocery_and_supermarkets" />
              Grocery and Supermarkets
            </label>
          </div>



          <div style={checkboxStyle}>
            
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="petroleum" />
              Petroleum
            </label>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="e_commerce" />
              E-Commerce
            </label>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="moto" />
              Mail order/telephone order (MOTO)
            </label>
          </div>
          <div style={checkboxStyle}>
          <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="other" />
              Others (please specify):
            </label>

           
           
          </div>


         
          
        </div>

        <div style={{display:'flex' , flexDirection:'row', justifyContent:'space-between'}}>
       <div style={formSectionStyle}>
          <h2 style={{ fontWeight: 'bold' }}>What types of payment channels does your business serve?</h2>
          <div style={checkboxContainerStyle}>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="paymentChannels" value="moto" />
              Mail order/telephone order (MOTO)
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="paymentChannels" value="ecommerce" />
              E-Commerce
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="paymentChannels" value="cardPresent" />
              Card-present (face-to-face)
            </label>
          </div>
        </div>

        

        <div style={formSectionStyle}>
          <h2 style={{ fontWeight: 'bold' }}>Which payment channels are covered by this SAQ?</h2>
          <div style={checkboxContainerStyle}>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="saqPaymentChannels" value="moto" />
              Mail order/telephone order (MOTO)
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="saqPaymentChannels" value="ecommerce" />
              E-Commerce
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="saqPaymentChannels" value="cardPresent" />
              Card-present (face-to-face)
            </label>
          </div>
        </div>
        </div>

        <div style={noteStyle}>
          <p>Note: If your organization has a payment channel or process that is not covered by this SAQ, consult your acquirer or payment brand about validation for the other channels.</p>
        </div>
        
      
      </form>
      </AccordionDetails>
      </Accordion> */}



      <Accordion expanded={expandedPanel === 'panelDescription'} onChange={handleAccordionChange('panelDescription')}>
      <AccordionSummary  className={classes.accordionHeader}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2b-content"
        id="panel2b-header"
        
      >
        <h2 style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>2.A: Description of Payment Card Business</h2>
      </AccordionSummary>
      <AccordionDetails
style={detailsStyle}>
<Typography variant="body2" gutterBottom style={{ fontSize: '1rem',fontWeight: 'bold' }}>
How and in what capacity does your business store, process and/or transmit cardholder data?
</Typography>
<TextField className={classes.formField}
       fullWidth
       id="cardholder-data-description"
       label="Description"
       multiline
       rows={4}
       helperText=" Provide a detailed description of how your business manages cardholder data. Include specifics on data storage locations, processing activities, and the methods used for transmitting data. Mention any security measures in place to protect this data throughout its lifecycle in your organization."
       placeholder="Provide a detailed description here ."
       variant="outlined"
     />



 <Typography component="div" gutterBottom>
        We do not Store, Process or Transmit any Card Holder Data. Payment processing has been fully outsourced.
        Transactions involving Debit / Credit cards are handled by
        <TextField
          className={classes.formField}
          size="small"
          id="transaction-handler"
          variant="outlined"
          placeholder="Razorpay / CC Avenues"
          style={{ width: 'auto', marginLeft: '8px', marginRight: '8px' }}
        />
        For Payment, Card details are entered on
        <TextField
          className={classes.formField}
          size="small"
          id="card-details-entry"
          variant="outlined"
          placeholder=" Mention where card details"
          style={{ width: 'auto', marginLeft: '8px', marginRight: '8px' }}
        />
      </Typography>


</AccordionDetails>
</Accordion>





<Accordion expanded={expandedPanel === 'panelLocations'} onChange={handleAccordionChange('panelLocations')}>
      <AccordionSummary  className={classes.accordionHeader}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2b-content"
        id="panel2b-header"
        
      >
<h2 style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>2.B: Locations</h2>

</AccordionSummary>
<p>List types of facilities (for example, retail outlets, corporate offices, data centers, call centers, etc.) and a 
summary of locations included in the PCI DSS review.</p>
      <AccordionDetails>
<TableContainer component={Paper}>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          <TableRow>
    <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>
      Type of facility
    </TableCell>
    <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }} align="center">
      Number of facilities of this type
    </TableCell>
    <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }} align="center">
      Location(s) of facility (city, country)
    </TableCell>
    
  </TableRow>
          </TableHead>


          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <TextField
                    value={row.type}
                    onChange={(e) => handleInputChange(e, index, 'type')}
                    fullWidth
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    value={row.number}
                    type="number
"
onChange={(e) => handleInputChange(e, index, 'number')}
fullWidth
/>
</TableCell>
<TableCell align="right">
<TextField className={classes.formField}
value={row.location}
onChange={(e) => handleInputChange(e, index, 'location')}
fullWidth
/>
</TableCell>
<TableCell align="right">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleRemoveRow(index)}
          sx={{ ml: 1 }} // Add some left margin for spacing
        >
          Remove
        </Button>
      </TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>


  <Button
    startIcon={<AddIcon />}
    onClick={handleAddRow}
    variant="contained"
    color="primary"
    sx={{ mt: 2 }}
  >
    Add Row
  </Button>
  </AccordionDetails>
</Accordion>





<Accordion>
      <AccordionSummary  className={classes.accordionHeader}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2d-content"
        id="panel2d-header"
       
      >
         <h2  style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>2.C: Payment Application</h2>
      </AccordionSummary>
      <AccordionDetails>

      {/* <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>
      Does the organization use one or more Payment Applications?
      <RadioGroup
        row
        aria-label="uses-payment-apps"
        name="usesPaymentApps"
        value={usesPaymentApps}
        onChange={(e) => setUsesPaymentApps(e.target.value)}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </Typography> */}

        <Typography style={{ fontWeight: 'bold', fontSize: '1rem',  }}>Provide the following information regarding the Payment Applications your organization uses:</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Payment Application Name</TableCell>
                <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Version Number</TableCell>
                <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Application Vendor</TableCell>
                <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Is application PA-DSS Listed?</TableCell>
                <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>PA-DSS Listing Expiry date (if applicable)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((app, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField className={classes.formField}
                      value={app.name}
                      onChange={(e) =>
handleInputChange1(e, index, 'name')}
fullWidth
/>
</TableCell>
<TableCell>
<TextField
value={app.version}
onChange={(e) => handleInputChange1(e, index, 'version')}
fullWidth
/>
</TableCell>
<TableCell>
<TextField
value={app.vendor}
onChange={(e) => handleInputChange1(e, index, 'vendor')}
fullWidth
/>
</TableCell>
<TableCell>
<FormGroup row>
<FormControlLabel
control={<Checkbox
checked={app.isListed === true}
onChange={() => handleCheckboxChange(index, true)}
/>}
label="Yes"
/>
<FormControlLabel
control={<Checkbox
checked={app.isListed === false}
onChange={() => handleCheckboxChange(index, false)}
/>}
label="No"
/>
</FormGroup>
</TableCell>
<TableCell>
<TextField
type="date"
value={app.expiryDate}
onChange={(e) => handleInputChange(e, index, 'expiryDate')}
fullWidth
/>
</TableCell>
<TableCell>
    <Button
      variant="contained"
      color="secondary"
      onClick={() => handleRemoveApplication(index)}
      sx={{ ml: 1 }} // Add some left margin for spacing
    >
      Remove
    </Button>
  </TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
<Button
  startIcon={<AddIcon />}
  onClick={addApplicationRow}
  variant="contained"
  color="primary"
  style={{ marginTop: '10px' }}
>
  Add Application
</Button>

</AccordionDetails>
</Accordion>






    <Accordion>
      <AccordionSummary  className={classes.accordionHeader}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2e-content"
        id="panel2e-header"
      >
         <h2  style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>2.D Description of Environment</h2>
      </AccordionSummary>
      <AccordionDetails>
        <Typography paragraph style={{ fontWeight: 'bold' }}>
          Provide a high-level description of the environment covered by this assessment.
        </Typography>
        <Typography paragraph>
          For example:
          <ul>
            <li>Connections into and out of the cardholder data environment (CDE).</li>
            <li>Critical system components within the CDE, such as POS devices, databases, web servers, etc., and any other necessary payment components, as applicable.</li>
          </ul>
        </Typography>
        <TextField className={classes.formField}
          fullWidth
          multiline
          rows={4}
          helperText=" In your description, detail the overall environment that this assessment addresses. Include information on the systems and processes involved, types of data handled, and interactions with other networks or third parties. Focus on aspects critical to understanding the security and data handling framework of your business environment.
          "
          placeholder="Enter high-level description here"
          variant="outlined"
        />
        <FormControl component="fieldset" style={{ marginTop: '20px' }}>
          <FormLabel component="legend" style={{ fontWeight: 'bold' }}>Does your business use network segmentation to affect the scope of your PCI DSS environment?</FormLabel>
          <RadioGroup
            row
            aria-label="network-segmentation"
            name="networkSegmentation"
            value={networkSegmentation}
            onChange={(e) => setNetworkSegmentation(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
         
        </FormControl>


        <Typography variant="subtitle1" gutterBottom>
        Please mention the following here:
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Brief the IT infrastructure of the Merchant's organization:
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              className={classes.formField}
              fullWidth
              label="Merchant's website URL"
              variant="outlined"
              placeholder="http://www.example.com"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.formField}
              fullWidth
              label="Name of ERP - If any"
              variant="outlined"
              placeholder="e.g., Octopot"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.formField}
              fullWidth
              label="Payment Gateway"
              variant="outlined"
              placeholder="e.g., CC Avenues / Razorpay / Billdesk"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.formField}
              fullWidth
              label="Any other third party service Provider"
              variant="outlined"
              placeholder="e.g., Juspay"
            />
          </Grid>
          {/* Add any additional fields as necessary */}
        </Grid>
      </Box>
      </AccordionDetails>
    </Accordion>





    <Accordion>
      <AccordionSummary  className={classes.accordionHeader}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2f-content"
        id="panel2f-header"
      >
        <h2  style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>2.E Third-Party Service Providers</h2>
      </AccordionSummary>
      <AccordionDetails>

{/* 
      <FormControl component="fieldset" fullWidth margin="normal">
  <FormLabel component="legend" style={{ fontWeight: 'bold', fontSize: '1rem',  }}>
    Does your company use a Qualified Integrator & Reseller (QIR)?
  </FormLabel>
  <RadioGroup
    row
    aria-label="use-qir"
    name="useQIR"
    value={useQIR}
    onChange={(e) => setUseQIR(e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="end" />
    <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="end" />
  </RadioGroup>
</FormControl> */}

{/* {useQIR === 'yes' && (
  <>
    <TextField fullWidth label="Name of QIR Company" margin="normal" />
    <TextField fullWidth label="QIR Individual Name" margin="normal" />
    <TextField
      fullWidth
      label="Description of services provided by QIR"
      margin="normal"
    />
  </>
)} */}

<FormControl component="fieldset" fullWidth margin="normal">
  <FormLabel component="legend" style={{ fontWeight: 'bold', fontSize: '1rem',  }}>
    Does your company share cardholder data with any third-party service providers?
  </FormLabel>
 
</FormControl>


   

<>
<TableContainer component={Paper} variant="outlined" margin="normal">
<Table aria-label="service providers table">
<TableHead>
<TableRow>
<TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Name of service provider</TableCell>
<TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Description of services provided</TableCell>
</TableRow>
</TableHead>
<TableBody>
{serviceProviders.map((provider, index) => (
<TableRow key={index}>
<TableCell>
<TextField
value={provider.name}
onChange={(e) => handleServiceProviderChange(index, 'name', e.target.value)}
fullWidth
/>
</TableCell>
<TableCell>
<TextField
value={provider.description}
onChange={(e) => handleServiceProviderChange(index, 'description', e.target.value)}
fullWidth
/>
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>


<Button
startIcon={<AddIcon />}
onClick={handleAddServiceProvider}
variant="contained"
color="primary"
style={{ marginTop: '10px' }}
>
Add Service Provider
</Button>

</>

</AccordionDetails>
</Accordion>






{/* 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2g-content"
          id="panel2g-header"
        >
          <h2  style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>2.G: Eligibility to Complete SAQ A</h2>
       
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="notPresentTransactions" />}
              label="Merchant accepts only card-not-present (e-commerce or mail/telephone-order) transactions;"
            />
            <FormControlLabel
              control={<Checkbox name="outsourcedProcessing" />}
              label="All processing of cardholder data is entirely outsourced to PCI DSS validated third-party service providers;"
            />
            <FormControlLabel
              control={<Checkbox name="noElectronicStorage" />}
              label="Merchant does not electronically store, process, or transmit
any cardholder data on merchant systems or premises, but relies entirely on a third party(s) to handle all these functions;"
/>
<FormControlLabel
control={<Checkbox name="thirdPartyCompliance" />}
label="Merchant has confirmed that all third party(s) handling storage, processing, and/or transmission of cardholder data are PCI DSS compliant; and"
/>
<FormControlLabel
control={<Checkbox name="dataOnPaper" />}
label="Any cardholder data the merchant retains is on paper (for example, printed reports or receipts), and these documents are not received electronically."
/>
<Typography variant="subtitle2" style={{ marginTop: '10px' }}>Additionally, for e-commerce channels:</Typography>
<FormControlLabel
control={<Checkbox name="ecommercePayments" />}
label="All elements of the payment page(s) delivered to the consumer’s browser originate only and directly from a PCI DSS validated third-party service provider(s)."
/>
</FormGroup>
</AccordionDetails>
</Accordion> */}





    </div>


    </AccordionDetails>
        </Accordion>

        </Box>



        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
          <Typography variant="h5" component="h1" gutterBottom sx={{ color: 'text.secondary', my: 2 }}>
            Part 3. PCI DSS Validation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
             
              <h2 style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>3A. Merchant Attestation</h2>
            </AccordionSummary>
            <AccordionDetails>

<div style={{display:'flex', flexDirection:'row',justifyContent: 'space-between', width: '100%'}}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: '1 1 auto', marginRight: '16px' }}>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Typography variant="body1" component="div" sx={{ width: 'auto' }}>
      Date:
    </Typography>
    <TextField
      type="date"
      className={classes.formField}
      sx={{ width: 200 }}
    />

  </Box>
  
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Typography variant="body1" component="div" sx={{ width: 'auto' }}>
      Merchant Executive Officer Name:
    </Typography>
    <TextField
    label="Executive Officer Name"
      className={classes.formField}
      sx={{ width: 200 }}
    />
  </Box>
  </Box>

  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,flex: '1 1 auto' }}>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Typography variant="body1" component="div" sx={{ width: 'auto' }}>
      Title:
    </Typography>
    <TextField
      className={classes.formField}
      label="Title"
      sx={{ width: 200 }}
    />
  </Box>
  
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Typography variant="body1" gutterBottom component="div" sx={{ width: 'auto' }}>
      Signature of Merchant Executive Officer:
    </Typography>
    <Button
      variant="contained"
      component="label"
      className={classes.uploadButton}
      startIcon={<CloudUploadIcon />}
    >
      Upload Signature
      <input
        type="file"
        hidden
        accept="image/*"
        onChange={handleSignatureChange}
      />
    </Button>
    {signatureImage && (
      <Box component="img" src={signatureImage} alt="Signature" sx={{ maxHeight: '100px', mt: 2, ml: 2 }} />
    )}
  </Box>
</Box>
</div>

            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>



        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit}
          style={{ width: '150px', height: '40px' }} // Fixed width and height
        >
          Save and Next
        </Button>
      </Box>


</>
);
};



export default Tabsection1;
