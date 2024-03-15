import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <main>
        <section>
          <div className="contact">
            <img src="/images/divers/Contactez-moi.gif" alt="contact GIF" />
            <Form />
            <div>
            <p>
              N’hésitez pas à m’écrire ! Je vous répondrai en moins de 24
              heures.
            </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
