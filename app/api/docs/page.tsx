"use client";

import SwaggerUI
from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";

import { swaggerSpec }
from "../../../lib/swagger";

export default function DocsPage() {

  return (

    <div className="min-h-screen bg-white">

      <SwaggerUI
        spec={swaggerSpec}
      />

    </div>

  );

}