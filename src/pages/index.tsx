import { styled } from "../styles";

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  border: 0,
  padding: '8px 4px',

  '&:hover': {
    filter: 'brightness(0.8)'
  },
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  );
}
