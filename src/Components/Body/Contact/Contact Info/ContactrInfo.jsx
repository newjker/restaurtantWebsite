import "./ContactInfo.css";

const ContactText = () => {
  return (
    <div>
      <h1 className="contact_page_title">Get in touch</h1>
      <h2 className="contact_page_text">
        Open 7 days a week
        <br />
        11:30 am - 11:00 pm
        <br />
        +44 7796 001927
        <br />
        <a
          href="https://www.google.com/maps/dir//110+Church+St,+Brighton+and+Hove,+Brighton+BN1+1UD/@50.8240901,-0.2211937,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4875850ab82ca0c1:0x11a6c98a69da5641!2m2!1d-0.1388083!2d50.8240965?entry=ttu"
          target="blank"
        >110 Chruch St, BN1 1UD, Brighton, UK</a>
      </h2>
    </div>
  );
};

export default  ContactText;