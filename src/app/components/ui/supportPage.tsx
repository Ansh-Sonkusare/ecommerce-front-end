function Support() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-inter mb-4 mt-40 text-center text-3xl font-bold"></h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-48 w-24 border-2  border-black bg-white p-6 md:w-96">
          <p className="mt-2 text-center">
            We guarantee the timely dispatch of your order, with a commitment to
            meeting specified delivery timelines. In the event of any unforeseen
            delays, we'll keep you informed and work diligently to expedite the
            process.
          </p>
        </div>
        <div className="h-48 w-24 border-2  border-black bg-white p-6 md:w-96">
          <p className="mt-2 text-center">
            Your camera products will be packaged with the utmost care to
            prevent any damage during transit. We use industry-standard
            packaging materials and techniques to safeguard your valuable
            equipment.
          </p>
        </div>
        <div className="h-48 w-24 border-2  border-black bg-white p-6 md:w-96">
          <p className="mt-2 text-center">
            Stay informed about your shipment's journey with our comprehensive
            tracking system. You'll receive real-time updates on the status and
            location of your order, ensuring transparency and peace of mind.
          </p>
        </div>
        <div className="h-48 w-24 border-2  border-black bg-white p-6 md:w-96">
          <p className="mt-2 text-center">
            Our dedicated customer support team is ready to assist you with any
            shipping-related inquiries. Feel free to reach out if you have
            questions about your order, delivery status, or any other concerns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Support;
