import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowingOrb } from "@/components/GlowingOrb";
import { ParticleField } from "@/components/ParticleField";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Mail } from "lucide-react";

const quickNav = [
  { id: "eligibility", label: "Eligibility" },
  { id: "account", label: "Account & User Responsibilities" },
  { id: "gameplay", label: "Gameplay & Fair Use" },
  { id: "dares", label: "Dares Feature" },
  { id: "tournaments", label: "Tournaments, Gifts & Rewards" },
  { id: "ads", label: "Ads & Third-Party Services" },
  { id: "ip", label: "Intellectual Property" },
  { id: "termination", label: "Account Suspension & Termination" },
  { id: "disclaimer", label: "Disclaimer of Warranties" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "changes", label: "Changes to These Terms" },
  { id: "law", label: "Governing Law" },
  { id: "user-content", label: "User Content & Community Safety" },
  { id: "contact-us", label: "Contact Us" },
];

const Terms = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <GlowingOrb className="-top-24 -right-24" size="xl" color="primary" />
        <GlowingOrb className="bottom-0 -left-32" size="lg" color="accent" />
        <ParticleField count={24} className="opacity-50" />

        <div className="container px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/products" className="inline-flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                  </Link>
                </Button>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="px-3 py-1">
                    Ludo Reverse
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Terms &amp; Conditions
                  </Badge>
                </div>
              </div>

              <div className="rounded-3xl border border-border/50 bg-background/40 backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">Terms &amp; Conditions – Ludo Reverse</h1>
                    <p className="text-muted-foreground mt-2">
                      These Terms &amp; Conditions ("Terms") govern your access to and use of the Ludo Reverse mobile application ("App").
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-card/60 border border-border/50 p-4">
                        <div className="text-xs text-muted-foreground">App</div>
                        <div className="font-semibold text-foreground mt-1">Ludo Reverse</div>
                      </div>
                      <div className="rounded-2xl bg-card/60 border border-border/50 p-4">
                        <div className="text-xs text-muted-foreground">Platform</div>
                        <div className="font-semibold text-foreground mt-1">Android / iOS</div>
                      </div>
                      <div className="rounded-2xl bg-card/60 border border-border/50 p-4">
                        <div className="text-xs text-muted-foreground">Last updated</div>
                        <div className="font-semibold text-foreground mt-1">04-03-2026</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      By downloading, accessing, or using the App, you agree to be bound by these Terms. If you do not agree, please do not use the App.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <AnimatedSection animation="fade-right">
                <Card className="border-border/50 bg-card/60 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-lg font-semibold text-foreground">Quick Navigation</h2>
                      <a
                        href="#contact-us"
                        className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </a>
                    </div>
                    <Separator className="my-4" />
                    <nav className="space-y-1">
                      {quickNav.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                    <Separator className="my-4" />
                    <div className="text-xs text-muted-foreground">App Name: Ludo Reverse</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-8">
              <AnimatedSection animation="fade-up">
                <Card className="border-border/50 bg-background/40 backdrop-blur-xl">
                  <CardContent className="p-6 md:p-10 space-y-10">
                    <section id="eligibility" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">1. Eligibility</h2>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>You must be at least 13 years old (or the minimum legal age in your country) to use the App.</li>
                        <li>By using the App, you confirm that you meet this requirement.</li>
                        <li>If you are using the App on behalf of a minor, you are responsible for their activity.</li>
                      </ul>
                    </section>

                    <section id="account" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">2. Account &amp; User Responsibilities</h2>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                        <li>You agree to provide accurate information and not impersonate another person.</li>
                        <li>You are responsible for all activities that occur under your account.</li>
                        <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
                      </ul>
                    </section>

                    <section id="gameplay" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">3. Gameplay &amp; Fair Use</h2>
                      <p className="text-muted-foreground mt-3">Ludo Reverse is intended for entertainment purposes only.</p>
                      <p className="text-muted-foreground mt-3">You agree not to:</p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>Cheat, exploit bugs, or manipulate gameplay</li>
                        <li>Use automated tools, bots, or hacks</li>
                        <li>Disrupt other users’ experience</li>
                        <li>Misuse chat, usernames, or game features</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        Any unfair or abusive behavior may result in temporary or permanent account suspension.
                      </p>
                    </section>

                    <section id="dares" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">4. Dares Feature (Important)</h2>
                      <p className="text-muted-foreground mt-3">Ludo Reverse includes optional dares designed for fun and social interaction.</p>
                      <p className="text-muted-foreground mt-3">By using dares, you agree that:</p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>Participation is completely voluntary</li>
                        <li>You will perform dares only if you feel comfortable and safe</li>
                        <li>Dares must be completed in a harmless, respectful, and lawful manner</li>
                        <li>You will not force, pressure, harass, or disturb other people</li>
                        <li>Any recording, posting, or tagging on social media requires clear consent</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        Ludo Reverse does not supervise or control actions performed outside the App and is not responsible for real-world outcomes of dares. You alone are responsible for your actions.
                      </p>
                    </section>

                    <section id="tournaments" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">5. Tournaments, Gifts &amp; Rewards</h2>
                      <p className="text-muted-foreground mt-3">Ludo Reverse may organize tournaments that offer free gifts or rewards.</p>
                      <p className="text-muted-foreground mt-3">Conditions include:</p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>Only the announced winners are eligible for rewards</li>
                        <li>If a tournament declares 3 winners, only those 3 users will receive gifts</li>
                        <li>Each winner is eligible for one reward per tournament, unless stated otherwise</li>
                        <li>Rewards are non-transferable and have no cash value</li>
                        <li>Winners may be required to verify their account or gameplay results</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">We reserve the right to:</p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>Disqualify users involved in cheating, fake claims, or misuse</li>
                        <li>Cancel or modify rewards due to fraud, technical issues, or policy violations</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">Our decision regarding winners and rewards will be final.</p>
                    </section>

                    <section id="ads" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">6. Ads &amp; Third-Party Services</h2>
                      <p className="text-muted-foreground mt-3">
                        The App may display advertisements and use third-party services (such as analytics, crash reporting, or ad networks).
                      </p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>These services operate under their own privacy policies</li>
                        <li>Ludo Reverse is not responsible for third-party content or services</li>
                        <li>You can manage ad personalization through your device settings.</li>
                      </ul>
                    </section>

                    <section id="ip" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">7. Intellectual Property</h2>
                      <p className="text-muted-foreground mt-3">
                        All content in the App (including graphics, logos, gameplay design, and text) belongs to Ludo Reverse or its licensors.
                      </p>
                      <p className="text-muted-foreground mt-3">
                        You may not copy, modify, distribute, or reverse-engineer any part of the App without permission.
                      </p>
                    </section>

                    <section id="termination" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">8. Account Suspension &amp; Termination</h2>
                      <p className="text-muted-foreground mt-3">We may suspend or terminate your access to the App at any time if:</p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>You violate these Terms</li>
                        <li>You engage in fraud, abuse, or cheating</li>
                        <li>Required by law or platform policies</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        Termination may result in loss of access to gameplay, rewards, or account data.
                      </p>
                    </section>

                    <section id="disclaimer" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">9. Disclaimer of Warranties</h2>
                      <p className="text-muted-foreground mt-3">The App is provided “as is” and “as available.”</p>
                      <p className="text-muted-foreground mt-3">We do not guarantee that:</p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>The App will be error-free or uninterrupted</li>
                        <li>All features will always be available</li>
                        <li>Gameplay outcomes or rewards will meet expectations</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">Use of the App is at your own risk.</p>
                    </section>

                    <section id="liability" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">10. Limitation of Liability</h2>
                      <p className="text-muted-foreground mt-3">To the maximum extent permitted by law:</p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>Ludo Reverse will not be liable for indirect, incidental, or consequential damages</li>
                        <li>We are not responsible for user behavior, real-world actions, or third-party interactions</li>
                      </ul>
                    </section>

                    <section id="changes" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">11. Changes to These Terms</h2>
                      <p className="text-muted-foreground mt-3">
                        We may update these Terms from time to time. Changes will be effective once posted in the App. Continued use of the App means you accept the updated Terms.
                      </p>
                    </section>

                    <section id="law" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">12. Governing Law</h2>
                      <p className="text-muted-foreground mt-3">
                        These Terms shall be governed by and interpreted in accordance with the laws applicable in your jurisdiction, without regard to conflict of law principles.
                      </p>
                    </section>

                    <section id="user-content" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">14. User Content &amp; Community Safety</h2>
                      <p className="text-muted-foreground mt-3">
                        Ludo Reverse allows users to create and share content such as usernames, and chat messages.
                      </p>
                      <p className="text-muted-foreground mt-3">To maintain a safe environment, the following rules apply:</p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>Users must not post, upload, or share content that is abusive, offensive, hateful, sexually explicit, illegal, or harmful to others.</li>
                        <li>Harassment, bullying, threats, and impersonation are strictly prohibited.</li>
                        <li>Users are responsible for the content they create or share within the App.</li>
                      </ul>

                      <p className="text-muted-foreground mt-5 font-semibold text-foreground">Reporting &amp; Blocking:</p>
                      <ul className="mt-2 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>Users can report inappropriate content or abusive users directly within the App.</li>
                        <li>Users can block other users to prevent further interaction.</li>
                      </ul>

                      <p className="text-muted-foreground mt-5 font-semibold text-foreground">Moderation:</p>
                      <ul className="mt-2 space-y-2 text-muted-foreground list-disc pl-6">
                        <li>Reported content may be reviewed by the developer and may be removed if it violates these Terms.</li>
                        <li>Accounts involved in abusive or harmful behavior may be suspended or permanently banned.</li>
                      </ul>

                      <p className="text-muted-foreground mt-4">
                        We aim to review and act on reports of objectionable content within <span className="font-semibold text-foreground">24 hours</span>.
                      </p>
                    </section>

                    <section id="contact-us" className="scroll-mt-24">
                      <h2 className="text-2xl font-bold text-foreground">13. Contact Us</h2>
                      <p className="text-muted-foreground mt-3">
                        If you have questions or concerns about these Terms &amp; Conditions, contact us at:
                      </p>
                      <div className="mt-5 rounded-2xl border border-border/50 bg-card/60 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Email</div>
                            <div className="text-lg font-semibold text-foreground">krishnainfinity27@gmail.com</div>
                            <div className="text-sm text-muted-foreground mt-1">App Name: Ludo Reverse</div>
                          </div>
                          <Button asChild>
                            <a href="mailto:krishnainfinity27@gmail.com" className="inline-flex items-center">
                              <Mail className="mr-2 h-4 w-4" />
                              Email Support
                            </a>
                          </Button>
                        </div>
                      </div>
                    </section>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
