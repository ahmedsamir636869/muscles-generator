import React from "react";

export default function GymFAQSection() {
  return (
    <div className="container mx-auto px-4 bg-black text-white">
      <section className="py-10">
        <h3 className="text-center text-3xl text-primary2 font-bold mb-4">
          MIKI FAQ
        </h3>
        <p className="text-center mb-8">
          Explore answers to commonly asked questions about our gym and workouts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8">
            <h6 className="text-primary2 text-xl mb-3">
              How can I get started at the gym?
            </h6>
            <p>
              <strong>
                <u>Getting started is easy!</u>
              </strong>{" "}
              Our trainers will guide you through a personalized workout plan
              based on your goals and fitness level.
            </p>
          </div>
          <div className="mb-8">
            <h6 className="text-primary2 text-xl mb-3">
              What are the membership options available?
            </h6>
            <p>
              We offer flexible membership plans including monthly, quarterly,
              and annual options. You can choose the plan that suits your
              schedule and preferences.
            </p>
          </div>
          <div className="mb-8">
            <h6 className="text-primary2 text-xl mb-3">
              Can I cancel my membership anytime?
            </h6>
            <p>
              <strong>
                <u>Yes, you can!</u>
              </strong>{" "}
              We understand that circumstances may change, so you can cancel
              your membership at any time with no additional fees.
            </p>
          </div>
          <div className="mb-8">
            <h6 className="text-primary2 text-xl mb-3">
              Do you offer personal training sessions?
            </h6>
            <p>
              Absolutely! Our experienced trainers provide one-on-one sessions
              to help you achieve your fitness goals effectively.
            </p>
          </div>
          <div className="mb-8">
            <h6 className="text-primary2 text-xl mb-3">
              What equipment is available at the gym?
            </h6>
            <p>
              We have a wide range of state-of-the-art equipment including
              cardio machines, free weights, and specialized workout stations.
            </p>
          </div>
          <div className="mb-8">
            <h6 className="text-primary2 text-xl mb-3">
              Can I bring a guest with my membership?
            </h6>
            <p>
              Yes, many of our membership plans allow you to bring a guest for
              workouts. Check with our front desk for more details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
