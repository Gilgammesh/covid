import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogActions } from "@material-ui/core";
import casa from "../../assets/img/yomequedoencasapng.png";

const useStyles = makeStyles(theme => ({
  responsive: {
    width: "100%",
    height: "auto"
  }
}));

const Index = () => {
  const [open, setOpen] = useState(true);

  const classes = useStyles();

  const handleClose = async () => {
    sessionStorage.setItem("isIntroCovidDisabled", true);
    setOpen(false);
  };

  return (
    <DialogActions>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <img className={classes.responsive} src={casa} alt="quetadeencasa" />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </DialogActions>
  );
};

export default Index;
