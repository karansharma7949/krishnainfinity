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
    { id: "international-data-transfers", label: "International Data Transfers" },
    { id: "safe-use-of-dares", label: "Safe Use of Dares" },
    { id: "tournaments-gifts-rewards", label: "Tournaments, Gifts & Rewards" },
    { id: "voice-chat-audio-data", label: "Voice Chat & Audio Data" },
    { id: "changes-to-policy", label: "Changes to This Policy" },
    { id: "contact-us", label: "Contact Us" },
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
                                        Ludo Reverse
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
                                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Privacy Policy – Ludo Reverse</h1>
                                        <p className="text-muted-foreground mt-2">
                                            This Privacy Policy describes how Ludo Reverse collects, uses, and shares information when you use our mobile game.
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
                                                <div className="font-semibold text-foreground mt-1">22-01-2026</div>
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
                                        <div className="text-xs text-muted-foreground">
                                            App Name: Ludo Reverse
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
                                                We collect information to provide and improve gameplay features (such as online matchmaking, friends, and leaderboards), troubleshoot issues, and show ads (if enabled in your build).
                                            </p>
                                            <div className="mt-5 space-y-5 text-muted-foreground">
                                                <div>
                                                    <div className="font-semibold text-foreground">Account Information (if you sign in)</div>
                                                    <ul className="mt-2 space-y-1 list-disc pl-6">
                                                        <li>Email address</li>
                                                        <li>Display name / username</li>
                                                        <li>Authentication identifiers</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Gameplay Data</div>
                                                    <ul className="mt-2 space-y-1 list-disc pl-6">
                                                        <li>Game state and events required to run matches</li>
                                                        <li>Room IDs, player moves, dice results, winners, and timestamps</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Device &amp; App Information</div>
                                                    <ul className="mt-2 space-y-1 list-disc pl-6">
                                                        <li>Device model</li>
                                                        <li>Operating system version</li>
                                                        <li>App version</li>
                                                        <li>Language</li>
                                                        <li>Approximate region (derived from device settings)</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Diagnostics</div>
                                                    <div className="mt-2">Crash logs and performance data to help identify and fix issues</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Advertising Identifiers (if ads are shown)</div>
                                                    <ul className="mt-2 space-y-1 list-disc pl-6">
                                                        <li>Device advertising ID (such as Google Advertising ID)</li>
                                                        <li>Ad interaction and measurement data</li>
                                                    </ul>
                                                </div>
                                                <div className="rounded-2xl border border-border/50 bg-card/60 p-4">
                                                    <div className="font-semibold text-foreground">Note:</div>
                                                    <div>
                                                        We do not intentionally collect sensitive personal information. Please do not share sensitive information in chat, usernames, or during gameplay.
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section id="how-we-use-information" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">2. How We Use Information</h2>
                                            <p className="text-muted-foreground mt-3">We use collected information to:</p>
                                            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                                                <li>Provide gameplay features such as online matches, friends, and leaderboards</li>
                                                <li>Maintain, improve, and debug the App</li>
                                                <li>Prevent fraud, cheating, spam, and misuse</li>
                                                <li>Display ads and measure ad performance (if enabled)</li>
                                            </ul>
                                        </section>

                                        <section id="sharing-third-parties" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">3. Sharing &amp; Third Parties</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We may share information with trusted service providers who help operate the App. These providers process data only on our behalf and only as necessary.
                                            </p>
                                            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="rounded-2xl border border-border/50 bg-card/60 p-5">
                                                    <div className="font-semibold text-foreground">Backend &amp; database services:</div>
                                                    <div className="text-muted-foreground mt-2">
                                                        Store user accounts, game rooms, and match results
                                                    </div>
                                                </div>
                                                <div className="rounded-2xl border border-border/50 bg-card/60 p-5">
                                                    <div className="font-semibold text-foreground">Crash reporting and diagnostics:</div>
                                                    <div className="text-muted-foreground mt-2">
                                                        Receive crash logs and basic device/app metadata
                                                    </div>
                                                </div>
                                                <div className="rounded-2xl border border-border/50 bg-card/60 p-5">
                                                    <div className="font-semibold text-foreground">Advertising networks:</div>
                                                    <div className="text-muted-foreground mt-2">
                                                        If enabled, advertising partners may collect device identifiers and ad interaction data
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section id="advertising" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">4. Advertising</h2>
                                            <p className="text-muted-foreground mt-3">
                                                The App may display ads using third-party advertising SDKs (for example, Google AdMob). These partners may use cookies or mobile identifiers to provide, personalize (where permitted), and measure ads.
                                            </p>
                                            <p className="text-muted-foreground mt-3">You can reset or limit ad personalization through your device settings.</p>
                                        </section>

                                        <section id="analytics" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">5. Analytics</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We may use analytics tools to understand how players use the App (such as session duration, feature usage, and error events). This data helps us improve gameplay experience, performance, and stability.
                                            </p>
                                        </section>

                                        <section id="data-retention" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">6. Data Retention</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We retain data only for as long as necessary for the purposes described in this policy:
                                            </p>
                                            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                                                <li>Account data while your account remains active</li>
                                                <li>Gameplay records for leaderboards, dispute resolution, and anti-cheat</li>
                                                <li>Diagnostics data for a limited period to resolve technical issues</li>
                                            </ul>
                                        </section>

                                        <section id="security" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">7. Security</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We take reasonable technical and organizational measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure.
                                            </p>
                                        </section>

                                        <section id="your-choices-rights" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">8. Your Choices &amp; Rights</h2>
                                            <div className="mt-5 space-y-4 text-muted-foreground">
                                                <div>
                                                    <div className="font-semibold text-foreground">Access and Update</div>
                                                    <div>You may update certain profile information within the App where available.</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Delete Account</div>
                                                    <div>
                                                        If your version of the App supports account deletion, you may request it directly in the App. Otherwise, contact us and we will assist you.
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground">Opt-Out of Personalized Ads</div>
                                                    <div>You may limit or reset ad personalization through your device settings.</div>
                                                </div>
                                            </div>
                                        </section>

                                        <section id="children-privacy" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">9. Children’s Privacy</h2>
                                            <p className="text-muted-foreground mt-3">
                                                The App is not directed to children under the age of 13 (or the minimum legal age required in your country). We do not knowingly collect personal information from children.
                                            </p>
                                            <p className="text-muted-foreground mt-3">
                                                If you believe a child has provided personal information, please contact us so we can delete it promptly.
                                            </p>
                                        </section>

                                        <section id="international-data-transfers" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">10. International Data Transfers</h2>
                                            <p className="text-muted-foreground mt-3">
                                                Your information may be processed in countries other than your own, depending on where our service providers operate. We take reasonable steps to ensure appropriate safeguards are in place where required by law.
                                            </p>
                                        </section>

                                        <section id="safe-use-of-dares" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">11. Safe Use of Dares (Important)</h2>
                                            <p className="text-muted-foreground mt-3">
                                                Ludo Reverse includes optional dares designed for fun and social interaction.
                                            </p>
                                            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                                                <li>Participation in dares is voluntary</li>
                                                <li>Users should attempt dares only if they feel comfortable and safe</li>
                                                <li>Dares must be performed in a harmless, respectful, and lawful manner</li>
                                                <li>Do not force, pressure, or disturb other people</li>
                                                <li>Some dares may involve public interaction, recording, or tagging on social media—always obtain consent first</li>
                                                <li>Users are encouraged to skip or change any dare they do not wish to perform</li>
                                                <li>
                                                    Ludo Reverse is not responsible for actions taken by users outside the App. Users are solely responsible for their behavior while performing dares.
                                                </li>
                                            </ul>
                                        </section>

                                        <section id="tournaments-gifts-rewards" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">12. Tournaments, Gifts &amp; Rewards</h2>
                                            <p className="text-muted-foreground mt-3">
                                                Ludo Reverse may conduct tournaments that offer free gifts or rewards to winners.
                                            </p>
                                            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                                                <li>Gifts are limited to the announced number of winners only</li>
                                                <li>(for example: if a tournament declares 3 winners, only those 3 winners are eligible)</li>
                                                <li>Rewards are non-transferable and cannot be claimed by non-winning users</li>
                                                <li>Each winner is eligible for one reward per tournament, unless stated otherwise</li>
                                                <li>We may verify winners through in-app data, match records, and account validation</li>
                                                <li>Fake claims, duplicate accounts, misuse, or fraudulent activity will result in disqualification</li>
                                                <li>Ludo Reverse reserves the right to withhold or cancel rewards if suspicious or abusive behavior is detected.</li>
                                            </ul>
                                        </section>

                                        <section id="voice-chat-audio-data" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">13. Voice Chat &amp; Audio Data</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We collect and process audio input only when you use the in-game voice chat feature.
                                            </p>
                                            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                                                <li>Audio is captured only inside private rooms where players voluntarily enable voice chat</li>
                                                <li>Voice communication is not recorded, stored, or saved by us</li>
                                                <li>Audio is transmitted in real time only to other players in the same private room</li>
                                                <li>Voice chat is not available in public matchmaking or public rooms</li>
                                                <li>If you do not use voice chat, no audio is accessed.</li>
                                            </ul>
                                        </section>

                                        <section id="changes-to-policy" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">14. Changes to This Policy</h2>
                                            <p className="text-muted-foreground mt-3">
                                                We may update this Privacy Policy from time to time. When we do, we will update the “Last updated” date above. Continued use of the App after changes means you accept the updated policy.
                                            </p>
                                        </section>

                                        <section id="contact-us" className="scroll-mt-24">
                                            <h2 className="text-2xl font-bold text-foreground">15. Contact Us</h2>
                                            <p className="text-muted-foreground mt-3">
                                                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
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

export default Privacy;
