import { Card } from "./Card";

interface Props {
  name: string;
  icon: string;
  description: string;
}

export const Skill = ({ icon, name, description }: Props) => {
  return (
    <Card aditionalClassNames="">
      <section>
        <span className={`${icon} text-6xl text-center `} />
      </section>
      <section className="flex flex-col">
        <h3 className="text-center font-bold text-2xl">{name}</h3>
        <p className="p-2">{description}</p>
      </section>
    </Card>
  );
};
