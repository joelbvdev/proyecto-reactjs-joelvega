import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';


export default function CartWidget() {

  return (
    <Badge badgeContent={5} color="danger" variant="solid">
      <Typography sx={{ fontSize: 'xl' }}>🛒</Typography>
    </Badge>
  )
  
}