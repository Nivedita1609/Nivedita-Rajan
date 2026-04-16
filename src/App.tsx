/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Ship, 
  Mail, 
  Phone, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronLeft, 
  Info,
  Package,
  Globe,
  Bell,
  Search,
  Menu,
  User,
  LayoutDashboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Screen = 'splash' | 'options' | 'form' | 'otp' | 'business' | 'success' | 'dashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [showAnnotations, setShowAnnotations] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    company: '',
    shippingVolume: 'medium'
  });

  // Handle progress bar
  useEffect(() => {
    const steps: Record<Screen, number> = {
      splash: 0,
      options: 10,
      form: 30,
      otp: 60,
      business: 80,
      success: 100,
      dashboard: 100
    };
    setProgress(steps[currentScreen]);
  }, [currentScreen]);

  const nextScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const prevScreen = () => {
    const flow: Screen[] = ['splash', 'options', 'form', 'otp', 'business', 'success', 'dashboard'];
    const currentIndex = flow.indexOf(currentScreen);
    if (currentIndex > 0) {
      setCurrentScreen(flow[currentIndex - 1]);
    }
  };

  // Screen Components
  const SplashScreen = () => (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full bg-secondary text-white p-8 text-center"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center shadow-2xl">
          <Ship className="w-16 h-16 text-primary" />
        </div>
      </motion.div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-4xl font-bold tracking-tight mb-4"
      >
        MAERSK
      </motion.h1>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg opacity-80 mb-12 font-light"
      >
        Global logistics simplified.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button 
          onClick={() => nextScreen('options')}
          className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg rounded-full"
        >
          Get Started
        </Button>
      </motion.div>
    </motion.div>
  );

  const OptionsScreen = () => (
    <motion.div 
      initial={{ x: 300, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      exit={{ x: -300, opacity: 0 }}
      className="flex flex-col h-full bg-white p-6"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-2">Join Maersk</h2>
        <p className="text-muted-foreground">Select how you'd like to create your account.</p>
      </div>

      <div className="space-y-4 flex-1">
        <Card 
          className="cursor-pointer hover:border-primary transition-colors group"
          onClick={() => nextScreen('form')}
        >
          <CardContent className="flex items-center p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-secondary">Email Address</h3>
              <p className="text-sm text-muted-foreground">Standard business registration</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors group">
          <CardContent className="flex items-center p-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
              <Phone className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-secondary">Mobile Number</h3>
              <p className="text-sm text-muted-foreground">Quick access via OTP</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors group">
          <CardContent className="flex items-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Building2 className="w-6 h-6 text-blue-700" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-secondary">Business Account</h3>
              <p className="text-sm text-muted-foreground">For enterprise organizations</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </div>

      <div className="mt-auto pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account? <span className="text-primary font-semibold cursor-pointer">Log in</span>
        </p>
      </div>
    </motion.div>
  );

  const FormScreen = () => (
    <motion.div 
      initial={{ x: 300, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      exit={{ x: -300, opacity: 0 }}
      className="flex flex-col h-full bg-white p-6"
    >
      <Button variant="ghost" size="icon" onClick={prevScreen} className="mb-4 -ml-2">
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-2">Create Account</h2>
        <p className="text-muted-foreground">Enter your details to get started.</p>
      </div>

      <div className="space-y-6 flex-1">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input 
            id="fullName" 
            placeholder="John Doe" 
            className="h-12 border-muted focus:border-primary"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@company.com" 
            className="h-12 border-muted focus:border-primary"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            placeholder="••••••••" 
            className="h-12 border-muted focus:border-primary"
          />
          <p className="text-xs text-muted-foreground">Must be at least 8 characters with a symbol.</p>
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <div className="mt-1">
            <ShieldCheck className="w-4 h-4 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            By continuing, you agree to Maersk's <span className="text-primary underline">Terms of Service</span> and <span className="text-primary underline">Privacy Policy</span>.
          </p>
        </div>
      </div>

      <Button 
        onClick={() => nextScreen('otp')}
        className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg rounded-lg mt-8"
        disabled={!formData.email || !formData.fullName}
      >
        Continue
      </Button>
    </motion.div>
  );

  const OTPScreen = () => (
    <motion.div 
      initial={{ x: 300, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      exit={{ x: -300, opacity: 0 }}
      className="flex flex-col h-full bg-white p-6"
    >
      <Button variant="ghost" size="icon" onClick={prevScreen} className="mb-4 -ml-2">
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-2">Verify Email</h2>
        <p className="text-muted-foreground">
          We've sent a 6-digit code to <span className="font-semibold text-secondary">{formData.email || 'your email'}</span>.
        </p>
      </div>

      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Input 
            key={i}
            className="w-12 h-14 text-center text-xl font-bold border-muted focus:border-primary"
            maxLength={1}
            autoFocus={i === 1}
          />
        ))}
      </div>

      <div className="text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          Didn't receive the code? <span className="text-primary font-semibold cursor-pointer">Resend</span>
        </p>
        <Button 
          onClick={() => nextScreen('business')}
          className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg rounded-lg"
        >
          Verify & Continue
        </Button>
      </div>
    </motion.div>
  );

  const BusinessScreen = () => (
    <motion.div 
      initial={{ x: 300, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      exit={{ x: -300, opacity: 0 }}
      className="flex flex-col h-full bg-white p-6"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-2">Business Details</h2>
        <p className="text-muted-foreground">Help us tailor your shipping experience.</p>
      </div>

      <div className="space-y-6 flex-1">
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input 
            id="company" 
            placeholder="Global Logistics Inc." 
            className="h-12 border-muted focus:border-primary"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>

        <div className="space-y-3">
          <Label>Primary Shipping Route</Label>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-muted hover:border-primary hover:bg-primary/5">
              <Globe className="w-5 h-5 mb-1 text-primary" />
              <span className="text-xs">Intra-Asia</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-muted hover:border-primary hover:bg-primary/5">
              <Globe className="w-5 h-5 mb-1 text-primary" />
              <span className="text-xs">Trans-Pacific</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-muted hover:border-primary hover:bg-primary/5">
              <Globe className="w-5 h-5 mb-1 text-primary" />
              <span className="text-xs">Trans-Atlantic</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-muted hover:border-primary hover:bg-primary/5">
              <Globe className="w-5 h-5 mb-1 text-primary" />
              <span className="text-xs">Europe-Asia</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Estimated Monthly Volume</Label>
          <Tabs defaultValue="medium" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-12">
              <TabsTrigger value="low" className="text-xs">1-10 TEU</TabsTrigger>
              <TabsTrigger value="medium" className="text-xs">11-50 TEU</TabsTrigger>
              <TabsTrigger value="high" className="text-xs">50+ TEU</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Button 
        onClick={() => nextScreen('success')}
        className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg rounded-lg mt-8"
        disabled={!formData.company}
      >
        Complete Setup
      </Button>
    </motion.div>
  );

  const SuccessScreen = () => (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full bg-white p-8 text-center"
    >
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
        <CheckCircle2 className="w-16 h-16 text-green-600" />
      </div>
      <h2 className="text-3xl font-bold text-secondary mb-4">Welcome Aboard!</h2>
      <p className="text-muted-foreground mb-12 leading-relaxed">
        Your account for <span className="font-semibold text-secondary">{formData.company}</span> is ready. You can now start booking and tracking your shipments.
      </p>
      
      <div className="w-full space-y-4">
        <Button 
          onClick={() => nextScreen('dashboard')}
          className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg rounded-lg"
        >
          Go to Dashboard
        </Button>
        <Button variant="ghost" className="w-full text-primary">
          Take a Quick Tour
        </Button>
      </div>
    </motion.div>
  );

  const DashboardScreen = () => (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex flex-col h-full bg-slate-50"
    >
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Ship className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-secondary tracking-tight">MAERSK</span>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://picsum.photos/seed/user/100/100" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-secondary">Overview</h2>
          <Button variant="outline" size="sm" className="text-xs h-8">
            Last 30 Days
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-none shadow-sm">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">Active Shipments</p>
              <p className="text-2xl font-bold text-secondary">12</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">Pending Quotes</p>
              <p className="text-2xl font-bold text-secondary">04</p>
            </CardContent>
          </Card>
        </div>

        {/* Tracking Card */}
        <Card className="border-none shadow-sm overflow-hidden">
          <CardHeader className="bg-white pb-2">
            <CardTitle className="text-sm font-semibold flex items-center">
              <Package className="w-4 h-4 mr-2 text-primary" />
              Quick Track
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Enter Container or B/L No." className="pl-10 h-12 bg-slate-50 border-none" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Shipments */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-secondary">Recent Shipments</h3>
          <Card className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center">
              <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center mr-4">
                <Ship className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-secondary">MSK-9283-CN</p>
                <p className="text-xs text-muted-foreground">Shanghai → Rotterdam</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">In Transit</p>
                <p className="text-[10px] text-muted-foreground mt-1">ETA: Apr 24</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center">
              <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center mr-4">
                <Ship className="w-5 h-5 text-slate-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-secondary">MSK-1102-US</p>
                <p className="text-xs text-muted-foreground">Long Beach → Busan</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Loading</p>
                <p className="text-[10px] text-muted-foreground mt-1">ETD: Apr 18</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-white border-t h-20 flex items-center justify-around px-4">
        <div className="flex flex-col items-center text-primary">
          <LayoutDashboard className="w-6 h-6" />
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center text-muted-foreground">
          <Ship className="w-6 h-6" />
          <span className="text-[10px] mt-1 font-medium">Shipments</span>
        </div>
        <div className="flex flex-col items-center text-muted-foreground">
          <Search className="w-6 h-6" />
          <span className="text-[10px] mt-1 font-medium">Quotes</span>
        </div>
        <div className="flex flex-col items-center text-muted-foreground">
          <User className="w-6 h-6" />
          <span className="text-[10px] mt-1 font-medium">Account</span>
        </div>
      </div>
    </motion.div>
  );

  // UX Annotations Data
  const annotations: Record<Screen, string[]> = {
    splash: [
      "Brand-first impression using Maersk Blue and Ship icon.",
      "Minimalist layout focuses on the core value proposition.",
      "High contrast 'Get Started' button for clear primary action."
    ],
    options: [
      "Categorized sign-up options to reduce cognitive load.",
      "Visual icons help users quickly identify their account type.",
      "Secondary 'Log in' link at the bottom for existing users."
    ],
    form: [
      "Minimal fields (Name, Email, Password) to reduce friction.",
      "Smart validation: Button remains disabled until required fields are filled.",
      "Trust signals: Terms and Privacy Policy clearly linked."
    ],
    otp: [
      "Verification step ensures data integrity and security.",
      "Auto-focus on first input for immediate user interaction.",
      "Resend option handles edge cases where code isn't received."
    ],
    business: [
      "Progressive disclosure: Business details asked only after account creation.",
      "Visual selection for shipping routes makes the form feel interactive.",
      "Segmented tabs for volume estimation simplify complex data input."
    ],
    success: [
      "Positive reinforcement with green checkmark and welcoming copy.",
      "Personalization: Mentions the user's company name.",
      "Clear path forward: Primary action to Dashboard, secondary for Tour."
    ],
    dashboard: [
      "Information-dense but clean layout following Maersk's corporate style.",
      "Quick Track search bar for the most common user task.",
      "Status-coded shipment cards for at-a-glance monitoring."
    ]
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      {/* Mobile Frame */}
      <div className="relative w-full max-w-[390px] h-[844px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-slate-900 flex flex-col">
        {/* Status Bar Mock */}
        <div className="h-10 w-full flex items-center justify-between px-8 pt-2 z-50">
          <span className="text-xs font-semibold">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 rounded-full border border-black/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            <div className="w-4 h-2 bg-black rounded-sm" />
          </div>
        </div>

        {/* Progress Bar (Visible after splash) */}
        {currentScreen !== 'splash' && currentScreen !== 'dashboard' && (
          <div className="px-6 pt-2">
            <Progress value={progress} className="h-1 bg-slate-100" />
          </div>
        )}

        {/* Screen Content */}
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {currentScreen === 'splash' && <SplashScreen key="splash" />}
            {currentScreen === 'options' && <OptionsScreen key="options" />}
            {currentScreen === 'form' && <FormScreen key="form" />}
            {currentScreen === 'otp' && <OTPScreen key="otp" />}
            {currentScreen === 'business' && <BusinessScreen key="business" />}
            {currentScreen === 'success' && <SuccessScreen key="success" />}
            {currentScreen === 'dashboard' && <DashboardScreen key="dashboard" />}
          </AnimatePresence>
        </div>

        {/* Home Indicator */}
        <div className="h-8 w-full flex items-center justify-center pb-2">
          <div className="w-32 h-1 bg-slate-200 rounded-full" />
        </div>
      </div>

      {/* UX Annotations Panel */}
      <div className="hidden lg:flex flex-col ml-12 w-80 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-secondary flex items-center">
            <Info className="w-5 h-5 mr-2 text-primary" />
            UX Annotations
          </h3>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowAnnotations(!showAnnotations)}
          >
            {showAnnotations ? 'Hide' : 'Show'}
          </Button>
        </div>

        {showAnnotations && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <Alert className="bg-white border-primary/20">
              <AlertTitle className="text-primary font-bold uppercase text-[10px] tracking-widest mb-2">
                Current Screen: {currentScreen.toUpperCase()}
              </AlertTitle>
              <AlertDescription>
                <ul className="space-y-3">
                  {annotations[currentScreen].map((note, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>

            <div className="p-4 bg-secondary rounded-xl text-white">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 opacity-60">Design System</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs">Primary Blue</span>
                  <div className="w-12 h-4 bg-primary rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Typography</span>
                  <span className="text-xs font-medium">Inter (Sans)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Radius</span>
                  <span className="text-xs font-medium">8px / 12px</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
