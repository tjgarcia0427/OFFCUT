// Hand-written DB types matching supabase/migrations/0001_init.sql.
// Replace with `supabase gen types` output when the schema grows.

export type Database = {
  public: {
    Tables: {
      briefs: {
        Row: {
          id: string;
          created_at: string;
          status: string;
          piece_type: string;
          title: string;
          description: string;
          reference_links: string | null;
          size: string;
          budget: string;
          timeline: string;
          city: string;
          email: string;
          handle: string | null;
          notes: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          status?: string;
          piece_type: string;
          title: string;
          description: string;
          reference_links?: string | null;
          size: string;
          budget: string;
          timeline: string;
          city: string;
          email: string;
          handle?: string | null;
          notes?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["briefs"]["Insert"]>;
        Relationships: [];
      };
      applications: {
        Row: {
          id: string;
          created_at: string;
          status: string;
          name: string;
          brand: string | null;
          email: string;
          city: string;
          instagram: string;
          website: string | null;
          disciplines: string;
          scale: string;
          turnaround: string;
          rate: string;
          pitch: string;
          notes: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          status?: string;
          name: string;
          brand?: string | null;
          email: string;
          city: string;
          instagram: string;
          website?: string | null;
          disciplines: string;
          scale: string;
          turnaround: string;
          rate: string;
          pitch: string;
          notes?: string | null;
        };
        Update: Partial<
          Database["public"]["Tables"]["applications"]["Insert"]
        >;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
