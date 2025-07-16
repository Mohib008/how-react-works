"use client";

import { useState } from "react";
import Tabs from "@/app/components/tabs";

export default function main({ content }) {
  return (
    <div className="bg-gradient-to-br from-blue-300 to-purple-700 p-8 pb-20 min-h-screen">
      <Tabs content={content} />
    </div>
  );
}
