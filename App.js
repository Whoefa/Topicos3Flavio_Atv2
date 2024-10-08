// import 'react-native-url-polyfill/auto'

import React, { useState, useEffect } from "react";

import { View, Text } from "react-native";

import { Session } from "@supabase/supabase-js";

import Auth from "./src/components/Auth";
import { supabase } from "./src/services/supabase";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenStack } from "react-native-screens";
import Welcome from "./src/pages/Welcome";
import Home from "./src/pages/Home";
import Routes from "./src/routes";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
  <View>
      <NavigationContainer>
        {session && session.user ? <Home session={session} /> : <Auth />}
      </NavigationContainer>
    </View>
  );
}
