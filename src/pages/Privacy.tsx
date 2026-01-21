import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowingOrb } from "@/components/GlowingOrb";
import { ParticleField } from "@/components/ParticleField";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Shield } from "lucide-react";

const quickNav = [
    { id: "information-we-collect", label: "Information We Collect" },
    { id: "how-we-use-information", label: "How We Use Information" },
    { id: "sharing-third-parties", label: "Sharing & Third Parties" },
    { id: "advertising", label: "Advertising" },
    { id: "analytics", label: "Analytics" },
    { id: "data-retention", label: "Data Retention" },
    { id: "security", label: "Security" },
    { id: "your-choices-rights", label: "Your Choices & Rights" },
    { id: "children-privacy", label: "Children’s Privacy" },
    { id: "international-transfers", label: "International Transfers" },
    { id: "changes", label: "Changes to this Policy" },
    { id: "contact", label: "Contact Us" },
];

const Privacy = () => {
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
                                        Reverse Ludo
                                    </Badge>
                                    <Badge variant="outline" className="px-3 py-1">
                                        Privacy Policy
                                    </Badge>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-border/50 bg-background/40 backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-primary/10">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Privacy Policy</h1>
                                        <p className="text-muted-foreground mt-2">
                                            This Privacy Policy describes how reverseludo collects, uses, and shares information when you use our mobile game.
                                        </p>
                                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            <div className="rounded-2xl bg-card/60 border border-border/50 p-4">
                                                <div className="text-xs text-muted-foreground">App</div>
                                                <div className="font-semibold text-foreground mt-1">reverseludo</div>
                                            </div>
                                            <div className="rounded-2xl bg-card/60 border border-border/50 p-4">
                                                <div className="text-xs text-muted-foreground">Platform</div>
                                                <div className="font-semibold text-foreground mt-1">Android / iOS</div>
                                            </div>
                                            <div className="rounded-2xl bg-card/60 border border-border/50 p-4">
                                                <div className="text-xs text-muted-foreground">Last updated</div>
                                                <div className="font-semibold text-foreground mt-1">2026-01-17</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-6">
                                            If you do not agree with this Privacy Policy, please do not use the App.
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
                                                href="#contact"
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
                                        <div className="text-xs text-muted-foreground">
                                            Developer/Company: krishnainfinity
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        </div>

                        <div className="lg:col-span-8">
                            <AnimatedSection animation="fade-up">
                                <Card className="border-border/50 bg-background/40 backdrop-blur-xl">
                                    <CardContent className="p-6 md:p-10 space-y-10">
                                        <section id="information-we-collect" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We collect information to provide and improve gameplay features (online matchmaking, friends, leaderboards), troubleshoot issues, and show ads (if enabled in your build).
                                            </p>
                                            <div className="mt-5 space-y-4 text-muted-foreground">
                                                <div>
                                                    <div className="font-semibold text-foreground">Account information (if you sign in):</div>
                                                    <div>Email address, display name/username, and authentication identifiers.</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Gameplay data:</div>
                                                    <div>Game state and events needed to run matches (e.g., room ID, player moves, dice results, winners, timestamps).</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Device &amp; app information:</div>
                                                    <div>Device model, operating system version, app version, language, and approximate region (derived from device settings).</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Diagnostics:</div>
                                                    <div>Crash logs and performance data to help us fix bugs.</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Advertising identifiers (if ads are shown):</div>
                                                    <div>Device advertising ID (such as Google Advertising ID) and related ad interaction data.</div>
                                                </div>
                                                <div className="rounded-2xl border border-border/50 bg-card/60 p-4">
                                                    <div className="font-semibold text-foreground">Note:</div>
                                                    <div>
                                                        We do not intentionally collect sensitive personal information. Please do not share sensitive information in chat or usernames.
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section id="how-we-use-information" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">2. How We Use Information</h2>
                                            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                                                <li>Provide gameplay features such as online matches, friends, and leaderboards.</li>
                                                <li>Maintain and improve the App, including debugging and performance tuning.</li>
                                                <li>Prevent fraud and abuse (e.g., cheating, spam, or misuse).</li>
                                                <li>Show ads and measure ad performance (if your version includes ads).</li>
                                            </ul>
                                        </section>

                                        <section id="sharing-third-parties" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">3. Sharing &amp; Third Parties</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We may share information with service providers who help operate the App. These providers process information on our behalf and only as needed to provide their services.
                                            </p>
                                            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="rounded-2xl border border-border/50 bg-card/60 p-5">
                                                    <div className="font-semibold text-foreground">Backend &amp; database services:</div>
                                                    <div className="text-muted-foreground mt-2">
                                                        We may use a backend provider to store user accounts, game rooms, and match results.
                                                    </div>
                                                </div>
                                                <div className="rounded-2xl border border-border/50 bg-card/60 p-5">
                                                    <div className="font-semibold text-foreground">Crash reporting and diagnostics:</div>
                                                    <div className="text-muted-foreground mt-2">
                                                        Providers may receive crash logs and basic device/app metadata.
                                                    </div>
                                                </div>
                                                <div className="rounded-2xl border border-border/50 bg-card/60 p-5">
                                                    <div className="font-semibold text-foreground">Advertising networks:</div>
                                                    <div className="text-muted-foreground mt-2">
                                                        If enabled, ad partners may collect device identifiers and ad interaction data.
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section id="advertising" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">4. Advertising</h2>
                                            <p className="text-muted-foreground mt-3">
                                                The App may display ads using third-party advertising SDKs (for example, Google AdMob). These partners may use cookies or mobile identifiers to provide, personalize (where permitted), and measure ads.
                                            </p>
                                            <p className="text-muted-foreground mt-3">You can reset or limit ad personalization from your device settings.</p>
                                        </section>

                                        <section id="analytics" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">5. Analytics</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We may use analytics to understand how players use the App (e.g., session duration, feature usage, errors). Analytics data is used to improve stability and gameplay.
                                            </p>
                                        </section>

                                        <section id="data-retention" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">6. Data Retention</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We retain data only as long as necessary for the purposes described above, including:
                                            </p>
                                            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                                                <li>Account data while your account is active.</li>
                                                <li>Gameplay records as needed for leaderboards, dispute resolution, and anti-cheat.</li>
                                                <li>Diagnostics data for a limited period to troubleshoot issues.</li>
                                            </ul>
                                        </section>

                                        <section id="security" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">7. Security</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We take reasonable measures to protect your information. However, no method of transmission or storage is 100% secure.
                                            </p>
                                        </section>

                                        <section id="your-choices-rights" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">8. Your Choices &amp; Rights</h2>
                                            <div className="mt-5 space-y-4 text-muted-foreground">
                                                <div>
                                                    <div className="font-semibold text-foreground">Access/Update:</div>
                                                    <div>You may update certain profile information within the App where available.</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Delete account:</div>
                                                    <div>
                                                        If your version of the App supports it, you can request account deletion. Otherwise, contact us and we will assist.
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Opt out of personalized ads:</div>
                                                    <div>Via device-level ad settings.</div>
                                                </div>
                                            </div>
                                        </section>

                                        <section id="children-privacy" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">9. Children’s Privacy</h2>
                                            <p className="text-muted-foreground mt-3">
                                                The App is not directed to children under the age of 13 (or the minimum age required in your country). We do not knowingly collect personal information from children.
                                            </p>
                                            <p className="text-muted-foreground mt-3">
                                                If you believe a child has provided personal information, contact us so we can delete it.
                                            </p>
                                        </section>

                                        <section id="international-transfers" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">10. International Transfers</h2>
                                            <p className="text-muted-foreground mt-3">
                                                Your information may be processed in countries other than your own depending on where our service providers operate. We take steps to ensure appropriate safeguards where required.
                                            </p>
                                        </section>

                                        <section id="changes" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">11. Changes to this Policy</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We may update this Privacy Policy from time to time. We will update the “Last updated” date above. Continued use of the App after changes means you accept the updated policy.
                                            </p>
                                        </section>

                                        <section id="contact" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">12. Contact Us</h2>
                                            <p className="text-muted-foreground mt-3">If you have questions or requests about this Privacy Policy, contact:</p>
                                            <div className="mt-5 rounded-2xl border border-border/50 bg-card/60 p-6">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                                    <div>
                                                        <div className="text-sm text-muted-foreground">Email</div>
                                                        <div className="text-lg font-semibold text-foreground">support@krishnainfinity.com</div>
                                                        <div className="text-sm text-muted-foreground mt-1">Developer/Company: krishnainfinity</div>
                                                    </div>
                                                    <Button asChild>
                                                        <a href="mailto:support@krishnainfinity.com" className="inline-flex items-center">
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

export default Privacy;
