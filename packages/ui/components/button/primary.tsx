type PrimaryButtonProps = {
  readonly text: string
}

export const Primary = ({ text }: PrimaryButtonProps) => {
  return <button>{text}</button>;
};
