import CardScript from "@components/CardScript";
import Logo from "@components/logo";
import "./style.scss";

export default function Home() {
  return (
    <>
      <Logo />
      <div className="Hheader">
        <p>Last Script Publish</p>
      </div>
      <CardScript />
    </>
  );
}
