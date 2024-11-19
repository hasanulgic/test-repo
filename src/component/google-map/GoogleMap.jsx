export default function GoogleMap() {

  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.5314934371631!2d90.41794319280953!3d23.78077128733418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f71eae757d%3A0x1c46f6f03e7a1e83!2z4Kaq4Ka_4KeO4Kac4Ka84Ka-4Kas4Ka-4Kaw4KeN4KaXIOCml-CngeCmsuCmtuCmvuCmqA!5e0!3m2!1sbn!2sbd!4v1716018642300!5m2!1sbn!2sbd"
        width="600"
        height="450"
        className="w-96 h-96 border-gray-500 border"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
