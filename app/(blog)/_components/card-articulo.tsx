interface Props {
  title: string;
  children: React.ReactNode;
}

const CardArticulo = ({ title, children }: Props) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {children}
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
};
export default CardArticulo;
