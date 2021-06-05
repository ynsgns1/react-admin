import React from 'react';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';

type MenuListButtonProps = {
    isLoading: Boolean;
};

const MenuListButton = ({ isLoading }: MenuListButtonProps) => {
    return (<Dialog
        open={isLoading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogContent>
            <CircularProgress />
        </DialogContent>
    </Dialog>);
}


export default MenuListButton;