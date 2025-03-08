import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 15, 2023";

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: {lastUpdated}
        </p>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                At SmartLearn, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our learning
                platform. Please read this privacy policy carefully. If you do
                not agree with the terms of this privacy policy, please do not
                access the site.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us when you
                register for an account, create or modify your profile, sign up
                for newsletters, purchase courses, contact customer support, or
                communicate with us. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Name, email address, and password</li>
                <li>Profile information (such as profile picture)</li>
                <li>
                  Payment information (processed by our payment processors)
                </li>
                <li>Course preferences and learning history</li>
                <li>Communications you send to us</li>
              </ul>

              <p>
                We also automatically collect certain information when you
                visit, use or navigate our platform. This information does not
                reveal your specific identity but may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Device and usage information</li>
                <li>IP address</li>
                <li>Browser and device characteristics</li>
                <li>Operating system</li>
                <li>Language preferences</li>
                <li>Referring URLs</li>
                <li>Information about how and when you use our platform</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>
                  Send administrative information, such as updates, security
                  alerts, and support messages
                </li>
                <li>Respond to comments, questions, and requests</li>
                <li>
                  Personalize your experience and deliver content relevant to
                  your interests
                </li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Protect against harmful or unlawful activity</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Sharing Your Information
              </h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Service Providers:</strong> We may share your
                  information with third-party vendors, service providers,
                  contractors or agents who perform services for us.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a
                  merger, acquisition, or sale of all or a portion of our
                  assets, your information may be transferred as part of that
                  transaction.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your
                  information where required to do so by law or in response to
                  valid requests by public authorities.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your
                  information with your consent or as otherwise disclosed at the
                  time of data collection or sharing.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track
                activity on our platform and hold certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier. You can instruct your browser to
                refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. However, despite our
                safeguards, no security system is impenetrable, and we cannot
                guarantee the security of our systems 100%.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Your Data Protection Rights
              </h2>
              <p>
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>The right to access information we hold about you</li>
                <li>
                  The right to request correction of your personal information
                </li>
                <li>
                  The right to request deletion of your personal information
                </li>
                <li>
                  The right to object to processing of your personal information
                </li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Children's Privacy
              </h2>
              <p>
                Our platform is not intended for children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@smartlearn.com
                <br />
                <strong>Address:</strong> 123 Learning Street, New York, NY
                10001, United States
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            This privacy policy was last updated on {lastUpdated}. If you have
            any questions about our privacy practices, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
