"use client";

import { useState } from "react";
import { Activity, ArrowUpRight, Bell, Check, CircleHelp, Command, MoreHorizontal, Sparkles } from "lucide-react";
import { AIOrb, type AIOrbState } from "@/components/ai/ai-orb";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { CustomCursorScope } from "@/components/motion/custom-cursor-scope";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { EmptyState } from "@/components/ui/empty-state";
import { AnimatedBorderCard, GlassPanel } from "@/components/ui/glass-panel";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress, StepProgress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const orbStates: AIOrbState[] = ["idle", "listening", "thinking", "speaking"];

export function DesignSystemShowcase() {
  const [orbState, setOrbState] = useState<AIOrbState>("idle");
  const [progress, setProgress] = useState(52);

  return (
    <main className="home-content">
      <div className="showcase">
        <header className="showcase-heading">
          <div>
            <Badge variant="accent"><span className="size-1.5 rounded-full bg-accent" /> INTERNAL COMPONENT PREVIEW</Badge>
            <h1>Design system</h1>
          </div>
          <p>A working reference for VOXORA’s interface primitives, motion language, and AI presence. This route is a component playground, not an interview workflow.</p>
        </header>

        <section className="showcase-section" aria-labelledby="controls-heading">
          <h2 id="controls-heading">Buttons, badges & menus</h2>
          <Card className="showcase-card">
            <div className="showcase-row">
              <Button onClick={() => toast.success("The primary action is connected.")}>Primary action <ArrowUpRight /></Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Quiet action</Button>
              <Button variant="destructive">Destructive</Button>
              <IconButton label="Show a notification" icon={<Bell />} size="sm" onClick={() => toast("Your notification is ready.")} />
              <Tooltip><TooltipTrigger asChild><IconButton label="More about this system" icon={<CircleHelp />} size="sm" /></TooltipTrigger><TooltipContent>All controls share the same color and focus tokens.</TooltipContent></Tooltip>
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="secondary">Options <MoreHorizontal /></Button></DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Preview actions</DropdownMenuLabel>
                  <DropdownMenuItem onSelect={() => toast("The component has been copied.")}><Command /> Copy component name <span className="ml-auto text-[10px] text-muted">⌘ C</span></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={() => toast.success("Saved to your preview list.")}><Check /> Save preview</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="showcase-row mt-5 border-t border-border pt-4">
              <Badge>Ready</Badge><Badge variant="secondary">Technical</Badge><Badge variant="accent">AI assisted</Badge><Badge variant="success">Complete</Badge><Badge variant="warning">In progress</Badge><Badge variant="destructive">Needs attention</Badge><Badge variant="outline">Optional</Badge>
            </div>
          </Card>
        </section>

        <section className="showcase-section" aria-labelledby="surfaces-heading">
          <h2 id="surfaces-heading">Surfaces & motion borders</h2>
          <div className="showcase-grid-three">
            <Card className="showcase-card">
              <CardHeader className="p-0"><CardTitle>Surface card</CardTitle><CardDescription>Quiet structure for clear hierarchy.</CardDescription></CardHeader>
              <CardContent className="p-0 pt-5"><div className="flex items-center gap-2 text-xs text-muted"><Activity className="size-4 text-primary" /> A reusable information surface</div></CardContent>
            </Card>
            <GlassPanel className="showcase-card"><h3>Glass panel</h3><p>Soft blur, fine edge, and a subtle top highlight.</p></GlassPanel>
            <AnimatedBorderCard className="showcase-card"><h3>Animated edge</h3><p>Hover to trace a slow violet-to-cyan border.</p></AnimatedBorderCard>
          </div>
        </section>

        <section className="showcase-section" aria-labelledby="dialog-heading">
          <h2 id="dialog-heading">Dialog & notifications</h2>
          <Card className="showcase-card">
            <CardDescription>Dialog focus stays contained, Escape closes it, and toast messages announce status changes.</CardDescription>
            <div className="showcase-row mt-4">
              <Dialog>
                <DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Ready when you are.</DialogTitle><DialogDescription>This accessible dialog supports Escape, a close button, and focus restoration to its trigger.</DialogDescription></DialogHeader>
                  <DialogFooter><DialogClose asChild><Button variant="ghost">Close</Button></DialogClose><DialogClose asChild><Button>Sounds good</Button></DialogClose></DialogFooter>
                </DialogContent>
              </Dialog>
              <Button variant="secondary" onClick={() => toast.success("All set.", { description: "The toast can be dismissed or will fade on its own." })}>Show success toast</Button>
              <Button variant="outline" onClick={() => toast.error("That didn’t work.", { description: "Error states use the same calm surface treatment." })}>Show error toast</Button>
            </div>
          </Card>
        </section>

        <section className="showcase-section" aria-labelledby="fields-heading">
          <h2 id="fields-heading">Inputs, textarea & select</h2>
          <div className="showcase-grid">
            <Card className="showcase-card">
              <div className="grid gap-4">
                <div className="field-shell"><Label htmlFor="preview-role">Target role</Label><Input id="preview-role" placeholder="e.g. Product designer" /></div>
                <div className="field-shell"><Label htmlFor="preview-notes">A little context</Label><Textarea id="preview-notes" placeholder="What would you like the interviewer to know?" /></div>
              </div>
            </Card>
            <Card className="showcase-card">
              <div className="field-shell"><Label htmlFor="preview-format">Interview format</Label>
                <Select defaultValue="behavioral">
                  <SelectTrigger id="preview-format"><SelectValue placeholder="Choose a format" /></SelectTrigger>
                  <SelectContent><SelectItem value="behavioral">Behavioral</SelectItem><SelectItem value="technical">Technical</SelectItem><SelectItem value="system-design">System design</SelectItem></SelectContent>
                </Select>
                <span className="field-hint">Select menus support keyboard navigation and typeahead.</span>
              </div>
            </Card>
          </div>
        </section>

        <section className="showcase-section" aria-labelledby="tabs-heading">
          <h2 id="tabs-heading">Tabs & progress</h2>
          <div className="showcase-grid">
            <Card className="showcase-card">
              <Tabs defaultValue="overview">
                <TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="details">Details</TabsTrigger><TabsTrigger value="notes">Notes</TabsTrigger></TabsList>
                <TabsContent value="overview"><CardDescription>Tabs switch content with arrow-key navigation and visible focus.</CardDescription></TabsContent>
                <TabsContent value="details"><CardDescription>Each panel is labelled and connected to its tab.</CardDescription></TabsContent>
                <TabsContent value="notes"><CardDescription>Compose tabs around meaningful sections.</CardDescription></TabsContent>
              </Tabs>
            </Card>
            <Card className="showcase-card">
              <div className="showcase-progress">
                <StepProgress steps={5} currentStep={3} label="Practice plan" />
                <div className="flex items-center gap-3"><Progress className="flex-1" value={progress} aria-label="Interactive progress preview" /><span className="w-9 text-right text-[10px] text-muted">{progress}%</span></div>
                <Button variant="outline" size="sm" onClick={() => setProgress((value) => Math.min(100, value + 12))} disabled={progress === 100}>Advance preview</Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="showcase-section" aria-labelledby="states-heading">
          <h2 id="states-heading">Loading & empty states</h2>
          <div className="showcase-grid">
            <Card className="showcase-card">
              <CardTitle>Skeleton</CardTitle>
              <div className="mt-5 flex items-center gap-3"><Skeleton className="size-11 rounded-full" /><div className="grid flex-1 gap-2"><Skeleton className="h-3 w-2/5" /><Skeleton className="h-2.5 w-3/4" /></div></div>
              <Skeleton className="mt-5 h-24 w-full rounded-xl" />
            </Card>
            <Card className="showcase-card p-0">
              <EmptyState icon={<Sparkles size={18} />} title="A clear place to begin" description="Empty states explain what belongs here and give the next action a useful name." action={<Button size="sm" variant="outline" onClick={() => toast("This action is connected to the component preview.")}>Preview an action</Button>} />
            </Card>
          </div>
        </section>

        <section className="showcase-section" aria-labelledby="orb-heading">
          <h2 id="orb-heading">AI presence</h2>
          <Card className="showcase-card showcase-orb-row">
            <div className="showcase-orb"><AIOrb state={orbState} size={250} /></div>
            <div className="showcase-orb-controls">
              <CardTitle>Orb states</CardTitle>
              <CardDescription>The same component responds to the interview lifecycle. Move a mouse over it for a gentle parallax response.</CardDescription>
              <div className="showcase-control">{orbStates.map((state) => <Button key={state} size="sm" variant={orbState === state ? "secondary" : "ghost"} aria-pressed={orbState === state} onClick={() => setOrbState(state)}>{state[0].toUpperCase()}{state.slice(1)}</Button>)}</div>
            </div>
          </Card>
        </section>

        <section className="showcase-section" aria-labelledby="motion-heading">
          <h2 id="motion-heading">Motion & interaction</h2>
          <StaggerGroup className="showcase-grid showcase-grid-three" delay={0.12}>
            <StaggerItem><Card className="showcase-card"><CardTitle>Fade & stagger</CardTitle><CardDescription>Scroll-triggered, once, with reduced-motion support.</CardDescription></Card></StaggerItem>
            <StaggerItem><Card className="showcase-card"><CardTitle>Soft reveal</CardTitle><CardDescription>Opacity and transform keep movement lightweight.</CardDescription></Card></StaggerItem>
            <StaggerItem><Card className="showcase-card"><CardTitle>Scroll progress</CardTitle><CardDescription><AnimatedNumber className="showcase-counter" value={87} suffix="%" /> is animated when it enters view.</CardDescription></Card></StaggerItem>
          </StaggerGroup>
          <div className="showcase-row mt-5"><MagneticButton><Sparkles /> Magnetic button</MagneticButton><Button variant="outline" onClick={() => toast("Spring and hover states are ready.")}>Hover & press states</Button></div>
          <Reveal variant="blur" className="mt-5"><GlassPanel className="showcase-card gradient-transition"><h3>Blur reveal & gradient transition</h3><p>Scroll into view. The decorative background shifts softly on hover.</p></GlassPanel></Reveal>
          <CustomCursorScope label="HELLO" className="showcase-cursor-surface mt-4"><p>On desktop, the cursor becomes a soft label inside this sample surface. Touch and reduced-motion users keep their normal input behavior.</p></CustomCursorScope>
        </section>

        <footer className="showcase-footer">Preview-only surface · All values and interactions here are component examples.</footer>
      </div>
    </main>
  );
}
