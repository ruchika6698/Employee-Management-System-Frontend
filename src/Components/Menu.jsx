
<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  Open Menu
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose} href="./login">Login</MenuItem>
  <MenuItem onClick={handleClose} href="./register">Register</MenuItem>
  <MenuItem onClick={handleClose} href="./addEmployeeDetails">Add Employee Details</MenuItem>
  <MenuItem onClick={handleClose} href="./update">Update</MenuItem>
  <MenuItem onClick={handleClose} href="./delete">Delete</MenuItem>
  <MenuItem onClick={handleClose} href="./getspecificemployee">Specific Employee Details</MenuItem>
  <MenuItem onClick={handleClose} href="./getallemployee">All Employee Details</MenuItem>
</Menu>