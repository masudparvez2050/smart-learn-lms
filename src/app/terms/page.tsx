import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsOfServicePage() {
  const lastUpdated = "July 15, 2023";

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: {lastUpdated}
        </p>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Welcome to SmartLearn. Please read these Terms of Service
                ("Terms") carefully as they contain important information about
                your legal rights, remedies, and obligations. By accessing or
                using the SmartLearn platform, you agree to comply with and be
                bound by these Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                1. Account Registration
              </h2>
              <p>
                To access certain features of the platform, you must register
                for an account. When you register, you agree to provide
                accurate, current, and complete information and to update such
                information to keep it accurate, current, and complete. You are
                responsible for safeguarding your password and for all
                activities that occur under your account.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                2. Course Enrollment and Access
              </h2>
              <p>
                When you enroll in a course, you gain a limited, non-exclusive,
                non-transferable license to access and view the course content
                for your personal, non-commercial, educational purposes. You may
                not share your account or course access with others.
              </p>
              <p className="mt-2">
                Unless otherwise specified, you will have lifetime access to
                courses you have enrolled in and paid for. However, we reserve
                the right to remove or modify course content at any time.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                3. Payments and Refunds
              </h2>
              <p>
                Course fees are as listed on the platform and are subject to
                change. When you make a purchase, you agree to pay the fees for
                the courses you enroll in.
              </p>
              <p className="mt-2">
                We offer a 30-day refund policy for most courses. If you are
                unsatisfied with a course, you can request a refund within 30
                days of enrollment. Some courses or promotional items may have
                different refund policies, which will be clearly stated at the
                time of purchase.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. User Content</h2>
              <p>
                You may have the opportunity to submit reviews, questions,
                comments, and other content ("User Content"). You retain
                ownership of your User Content, but you grant us a worldwide,
                perpetual, irrevocable, royalty-free license to use, reproduce,
                modify, adapt, publish, translate, and distribute your User
                Content in any existing or future media.
              </p>
              <p className="mt-2">
                You agree not to post User Content that is illegal, offensive,
                threatening, defamatory, or otherwise objectionable. We reserve
                the right to remove any User Content at our discretion.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                5. Intellectual Property
              </h2>
              <p>
                The platform and its original content, features, and
                functionality are owned by SmartLearn and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
              <p className="mt-2">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our
                platform, except as permitted by these Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                6. Prohibited Activities
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  Use the platform in any way that violates any applicable law
                  or regulation
                </li>
                <li>
                  Impersonate or attempt to impersonate SmartLearn, an employee,
                  another user, or any other person
                </li>
                <li>
                  Engage in any conduct that restricts or inhibits anyone's use
                  or enjoyment of the platform
                </li>
                <li>
                  Attempt to gain unauthorized access to the platform, user
                  accounts, or computer systems
                </li>
                <li>
                  Use any robot, spider, or other automatic device to access the
                  platform
                </li>
                <li>
                  Introduce any viruses, Trojan horses, worms, or other harmful
                  material
                </li>
                <li>Interfere with the proper working of the platform</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the
                platform immediately, without prior notice or liability, for any
                reason, including if you breach these Terms. Upon termination,
                your right to use the platform will immediately cease.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                In no event shall SmartLearn, its directors, employees,
                partners, agents, suppliers, or affiliates be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                access to or use of or inability to access or use the platform.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the United States, without regard to its
                conflict of law provisions. Any dispute arising from these Terms
                shall be resolved in the courts located in New York, New York.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will provide at least 30
                days' notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole
                discretion.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@smartlearn.com
                <br />
                <strong>Address:</strong> 123 Learning Street, New York, NY
                10001, United States
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            These Terms of Service were last updated on {lastUpdated}. By
            continuing to access or use our platform after any revisions become
            effective, you agree to be bound by the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
}
