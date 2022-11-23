import * as React from 'react';
import './BillzTable.css';
import { Container, DialogContent } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import { Dialog } from '@mui/material';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { connect } from "react-redux";
import { favoriteAction } from "../services/actions/favoriteAction";
import { unfavoriteAction } from "../services/actions/unfavoriteAction";

const RenderFavoritesButton = (params) => {
  const classIndex = 'icon'+params.id;
  const [btnClass, setBtnClass] = React.useState(false);
  const [btnColor, setBtnColor] = React.useState("primary");
  return (
      <strong>
        <IconButton 
        color="primary" 
        aria-label="Add to favorites" 
        component="label"
        className={btnClass ? "favorites selected" : "favorites"}
        onClick={(e) => {
          // alert(params.id);
          // console.log('Favorites',params);
          // const collection = document.getElementsByClassName("icon"+params.id);
          setBtnClass(!btnClass);
          btnColor === "primary" ? setBtnColor("yellow") : setBtnColor("primary");
          if(params.field === 'col5'){
            e.stopPropagation();
          }
      }}
        >
          <StarOutlineIcon></StarOutlineIcon>
        </IconButton>
      </strong>
  )
}

const rows = [
  { id: 1, col1: 'D003859', col2: 'Primary', col3: 'Initiated',col4: 'Jack Murphy' },
  { id: 2, col1: 'M5697320', col2: 'Secondary', col3: 'Pending', col4: 'Daniel Mc Carthy' },
  { id: 3, col1: 'X387596', col2: 'Primary', col3: 'Reported', col4: 'Ciara Doyle' },
  { id: 4, col1: 'Y408960', col2: 'Secondary', col3: 'Initiated', col4: 'Riley O’Connor' },
  { id: 5, col1: 'D003859', col2: 'Primary', col3: 'Initiated',col4: 'Ryan Kelly' },
  { id: 6, col1: 'M5697320', col2: 'Secondary', col3: 'Pending', col4: 'Eoin Doyle' },
  { id: 7, col1: 'X387596', col2: 'Primary', col3: 'Reported', col4: 'Shane Walsh' },
  { id: 8, col1: 'Y408960', col2: 'Secondary', col3: 'Initiated', col4: 'Paul Mc Carthy' },
  { id: 9, col1: 'D003859', col2: 'Primary', col3: 'Initiated',col4: 'Thomas Sullivan' },
  { id: 10, col1: 'M5697320', col2: 'Secondary', col3: 'Pending', col4: 'Rowan O’Connor' },
  { id: 11, col1: 'X387596', col2: 'Primary', col3: 'Reported', col4: 'Keira Kelly' },
  { id: 12, col1: 'Y408960', col2: 'Secondary', col3: 'Initiated', col4: 'Kaitlyn Murphy' }
];

const columns = [
    { field: 'col1', 
      headerName: 'Bill Number', 
      minWidth:200, 
      flex:1, 
      headerClassName: 'data-table-header', 
      disableColumnMenu: true, 
      disableColumnFilter: true, 
      disableColumnSelector: true
    },
    { field: 'col2', 
      headerName: 'Bill Type', 
      width:200,  flex:1, 
      headerClassName: 'data-table-header', 
      sortable: false 
    },
    { field: 'col3', 
      headerName: 'Status', 
      width:200,  flex:1, 
      headerClassName: 'data-table-header', 
      disableColumnMenu: true, 
      disableColumnFilter: true, 
      disableColumnSelector: true, 
      sortable: false 
    },
    { field: 'col4', 
      headerName: 'Sponsor', 
      width:200,  flex:1, 
      headerClassName: 'data-table-header', 
      disableColumnMenu: true, 
      disableColumnFilter: true,
      disableColumnSelector: true, 
      sortable: false 
    },
    { field: 'col5', 
      headerName: 'Favorites', 
      width:200,
      headerClassName: 'data-table-header', 
      disableColumnMenu: true, 
      disableColumnFilter: true, 
      disableColumnSelector: true,
      renderCell: RenderFavoritesButton, 
      sortable: false 
  }
];



function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const fillerLanguages = [
    "Lorem ipsum dolor sit amet, bibendum dolor maecenas ipsum, in turpis sem. Nullam pede est vestibulum adipiscing suspendisse purus. Massa fusce phasellus et. Eros elit aliquam amet, placerat donec, dui dolor nec suscipit quis. Proin mattis ut nulla a mauris vivamus, varius aliquet vel quam, habitasse sed, curabitur arcu sed sollicitudin. Pede orci, nibh ut congue lorem platea, cras feugiat et ornare primis praesent euismod, ac ipsum. Suscipit fames dui dolor. Senectus neque suspendisse in, tincidunt id natoque. Turpis etiam vestibulum orci lacus dignissim, sollicitudin quisque. Nam condimentum platea consectetuer scelerisque etiam, mauris porta quam tellus, fusce aliquam ligula viverra adipiscing. Tellus accumsan pulvinar.",
    "Seo chugaibh scéal faoi oileán iathghlas taithneamhach a chuireann cumha agus croí trom ar a chlanna más gá dóibh imeacht thar lear. Cé gur breá álainn an tír í, tá sí bocht agus ní féidir léi postanna go leor a sholáthar dá muintir ar fad."
  ]
  const [value, setValue] = React.useState(0);
  const [fillerText, setFillerText] = React.useState(fillerLanguages[0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch(newValue) {
      case 0: {
        setFillerText(fillerLanguages[0]);
      break;
      }
      case 1 : {
        setFillerText(fillerLanguages[1]);
      }
    }
  };

  const handleSubmit = (value) => {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} 
            open={open} 
            maxWidth='md' 
            fullWidth='true' 
            sx={{padding:'20px'}} 
            PaperProps={{
              style: {
                minHeight: '60vh',
                minWidth: '75vw',
              },
            }}>
      <DialogTitle><h5>Please select your preferred language</h5></DialogTitle>
      <DialogContent>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="English" />
            <Tab label="Gaeilge" />
          </Tabs>
        </Box>
        <Typography>{fillerText}</Typography>
    </DialogContent>
    <Button variant="outlined" onClick={handleSubmit}>
        Done
      </Button>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


const BillzDataTable = () => {

    const [pageSize, setPageSize] = React.useState(10);
    const [open, setOpen] = React.useState(false);
  
    const handleRowClick = (param,event) => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      // setSelectedValue(value);
    };
    
    return (
        <Container maxWidth="lg">
      <div style={{ height: 500 }}>
        <DataGrid 
            rows={rows}
            columns={columns} 
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            disableSelectionOnClick
            onRowClick={handleRowClick}
            />
            </div>
            <div>
            <SimpleDialog
              // selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </div>
      </Container>
    );
  }

  const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
    favoriteAction: () => dispatch(favoriteAction),
    unfavoriteAction: () => dispatch(unfavoriteAction)
  });

export default connect(mapStateToProps, mapDispatchToProps)(BillzDataTable);