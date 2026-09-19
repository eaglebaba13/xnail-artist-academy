export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      applications: {
        Row: {
          course_id: string | null
          created_at: string
          id: string
          lead_id: string
          submitted_payload: Json
        }
        Insert: {
          course_id?: string | null
          created_at?: string
          id?: string
          lead_id: string
          submitted_payload: Json
        }
        Update: {
          course_id?: string | null
          created_at?: string
          id?: string
          lead_id?: string
          submitted_payload?: Json
        }
        Relationships: [
          {
            foreignKeyName: "applications_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_tracking: {
        Row: {
          created_at: string
          fbclid: string | null
          gclid: string | null
          id: string
          landing_page: string | null
          lead_id: string
          meta_delivery_status: Database["public"]["Enums"]["integration_status"]
          meta_event_id: string | null
          referrer: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          created_at?: string
          fbclid?: string | null
          gclid?: string | null
          id?: string
          landing_page?: string | null
          lead_id: string
          meta_delivery_status?: Database["public"]["Enums"]["integration_status"]
          meta_event_id?: string | null
          referrer?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          created_at?: string
          fbclid?: string | null
          gclid?: string | null
          id?: string
          landing_page?: string | null
          lead_id?: string
          meta_delivery_status?: Database["public"]["Enums"]["integration_status"]
          meta_event_id?: string | null
          referrer?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_tracking_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      course_modules: {
        Row: {
          course_id: string
          created_at: string
          description: string | null
          duration_days: number
          id: string
          position: number
          title: string
          topics: Json
          updated_at: string
        }
        Insert: {
          course_id: string
          created_at?: string
          description?: string | null
          duration_days: number
          id?: string
          position: number
          title: string
          topics?: Json
          updated_at?: string
        }
        Update: {
          course_id?: string
          created_at?: string
          description?: string | null
          duration_days?: number
          id?: string
          position?: number
          title?: string
          topics?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_modules_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          active: boolean
          created_at: string
          duration_days: number
          duration_hours: number
          id: string
          name: string
          price_inr: number
          slug: string
          superprofile_course_id: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          duration_days: number
          duration_hours: number
          id?: string
          name: string
          price_inr: number
          slug: string
          superprofile_course_id?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          duration_days?: number
          duration_hours?: number
          id?: string
          name?: string
          price_inr?: number
          slug?: string
          superprofile_course_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      faqs: {
        Row: {
          active: boolean
          answer: string
          created_at: string
          id: string
          position: number
          question: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          answer: string
          created_at?: string
          id?: string
          position?: number
          question: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          answer?: string
          created_at?: string
          id?: string
          position?: number
          question?: string
          updated_at?: string
        }
        Relationships: []
      }
      lead_status_history: {
        Row: {
          changed_by: string | null
          created_at: string
          from_status: Database["public"]["Enums"]["lead_status"] | null
          id: string
          lead_id: string
          note: string | null
          to_status: Database["public"]["Enums"]["lead_status"]
        }
        Insert: {
          changed_by?: string | null
          created_at?: string
          from_status?: Database["public"]["Enums"]["lead_status"] | null
          id?: string
          lead_id: string
          note?: string | null
          to_status: Database["public"]["Enums"]["lead_status"]
        }
        Update: {
          changed_by?: string | null
          created_at?: string
          from_status?: Database["public"]["Enums"]["lead_status"] | null
          id?: string
          lead_id?: string
          note?: string | null
          to_status?: Database["public"]["Enums"]["lead_status"]
        }
        Relationships: [
          {
            foreignKeyName: "lead_status_history_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          career_interest: string
          city: string
          created_at: string
          email: string | null
          experience: string
          full_name: string
          id: string
          mobile: string
          normalized_email: string | null
          normalized_mobile: string
          notes: string | null
          profession: string
          source: string
          status: Database["public"]["Enums"]["lead_status"]
          updated_at: string
          whatsapp_number: string
        }
        Insert: {
          career_interest: string
          city: string
          created_at?: string
          email?: string | null
          experience: string
          full_name: string
          id?: string
          mobile: string
          normalized_email?: string | null
          normalized_mobile: string
          notes?: string | null
          profession: string
          source: string
          status?: Database["public"]["Enums"]["lead_status"]
          updated_at?: string
          whatsapp_number: string
        }
        Update: {
          career_interest?: string
          city?: string
          created_at?: string
          email?: string | null
          experience?: string
          full_name?: string
          id?: string
          mobile?: string
          normalized_email?: string | null
          normalized_mobile?: string
          notes?: string | null
          profession?: string
          source?: string
          status?: Database["public"]["Enums"]["lead_status"]
          updated_at?: string
          whatsapp_number?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount_inr: number
          created_at: string
          id: string
          lead_id: string | null
          paid_at: string | null
          provider: string | null
          provider_payment_id: string | null
          status: Database["public"]["Enums"]["payment_status"]
          student_id: string | null
          updated_at: string
        }
        Insert: {
          amount_inr: number
          created_at?: string
          id?: string
          lead_id?: string | null
          paid_at?: string | null
          provider?: string | null
          provider_payment_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          student_id?: string | null
          updated_at?: string
        }
        Update: {
          amount_inr?: number
          created_at?: string
          id?: string
          lead_id?: string | null
          paid_at?: string | null
          provider?: string | null
          provider_payment_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          student_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name: string
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          category: string
          is_public: boolean
          key: string
          updated_at: string
          updated_by: string | null
          value: Json
        }
        Insert: {
          category?: string
          is_public?: boolean
          key: string
          updated_at?: string
          updated_by?: string | null
          value: Json
        }
        Update: {
          category?: string
          is_public?: boolean
          key?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Relationships: []
      }
      students: {
        Row: {
          course_id: string
          created_at: string
          email: string | null
          enrolled_at: string
          full_name: string
          id: string
          lead_id: string | null
          lms_status: Database["public"]["Enums"]["integration_status"]
          mobile: string
          superprofile_user_id: string | null
          updated_at: string
        }
        Insert: {
          course_id: string
          created_at?: string
          email?: string | null
          enrolled_at?: string
          full_name: string
          id?: string
          lead_id?: string | null
          lms_status?: Database["public"]["Enums"]["integration_status"]
          mobile: string
          superprofile_user_id?: string | null
          updated_at?: string
        }
        Update: {
          course_id?: string
          created_at?: string
          email?: string | null
          enrolled_at?: string
          full_name?: string
          id?: string
          lead_id?: string | null
          lms_status?: Database["public"]["Enums"]["integration_status"]
          mobile?: string
          superprofile_user_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "students_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "students_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: true
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      testimonials: {
        Row: {
          approval_status: Database["public"]["Enums"]["approval_status"]
          city: string | null
          course: string | null
          created_at: string
          id: string
          name: string
          photo_url: string | null
          position: number
          testimonial: string
          updated_at: string
        }
        Insert: {
          approval_status?: Database["public"]["Enums"]["approval_status"]
          city?: string | null
          course?: string | null
          created_at?: string
          id?: string
          name: string
          photo_url?: string | null
          position?: number
          testimonial: string
          updated_at?: string
        }
        Update: {
          approval_status?: Database["public"]["Enums"]["approval_status"]
          city?: string | null
          course?: string | null
          created_at?: string
          id?: string
          name?: string
          photo_url?: string | null
          position?: number
          testimonial?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor"
      approval_status: "draft" | "pending" | "approved" | "rejected"
      integration_status: "not_connected" | "pending" | "active" | "failed"
      lead_status:
        | "NEW_LEAD"
        | "CONTACTED"
        | "COUNSELLING_SCHEDULED"
        | "COUNSELLING_COMPLETED"
        | "PAYMENT_PENDING"
        | "PAYMENT_SUCCESSFUL"
        | "ADMITTED"
        | "LMS_ACTIVATED"
        | "TRAINING_IN_PROGRESS"
        | "COMPLETED"
        | "CERTIFICATE_ISSUED"
        | "POST_COURSE_FOLLOW_UP"
      payment_status: "pending" | "successful" | "failed" | "refunded"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
      approval_status: ["draft", "pending", "approved", "rejected"],
      integration_status: ["not_connected", "pending", "active", "failed"],
      lead_status: [
        "NEW_LEAD",
        "CONTACTED",
        "COUNSELLING_SCHEDULED",
        "COUNSELLING_COMPLETED",
        "PAYMENT_PENDING",
        "PAYMENT_SUCCESSFUL",
        "ADMITTED",
        "LMS_ACTIVATED",
        "TRAINING_IN_PROGRESS",
        "COMPLETED",
        "CERTIFICATE_ISSUED",
        "POST_COURSE_FOLLOW_UP",
      ],
      payment_status: ["pending", "successful", "failed", "refunded"],
    },
  },
} as const
