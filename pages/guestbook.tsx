import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";
import { AiOutlineGithub } from "react-icons/ai";
import ContentLoader from "react-content-loader";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/config/keys";

const GuestBook = () => {
  const { data: session } = useSession<any>();
  const [loading, setLoading] = useState<any>(false);
  const [message, setMessage] = useState<any>("");
  const [userMsg, setUserMsg] = useState<any>([]);

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const getGuestBookData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("guestbook")
        .select()
        .order("created_at", { ascending: false });

      setMessage(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuestBookData();
  }, []);

  const handleInput = (e: any) => {
    setUserMsg(e.target.value);
  };

  const createMessage = async (e: any) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("guestbook").insert([
        {
          message: userMsg,
          user_id: session.user.id,
          username: session.user.name,
        },
      ]);
      setUserMsg("");
      getGuestBookData();
    } catch (error) {
      console.log(error);
    }
  };

  return <div>GuestBook</div>;
};

export default GuestBook;
