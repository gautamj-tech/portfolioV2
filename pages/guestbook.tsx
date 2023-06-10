import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config/keys";
import { AiOutlineGithub } from "react-icons/ai";
import ContentLoader from "react-content-loader";
import Title from "@/components/Title";

const Guestbook = () => {
  const { data: session }: any = useSession<any>();
  const [loading, setLoading] = useState<boolean>(false);
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
      const { data, error }: any = await supabase.from("guestbook").insert([
        {
          message: userMsg,
          user_id: session?.user?.id,
          username: session?.user?.name,
        },
      ]);
      setUserMsg("");
      getGuestBookData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-[100vh] overflow-y-auto mt-10">
      <div className="bg-secondary p-10 rounded-xl">
        <Title title="GuestBook" />
      </div>

      <div className="mt-10">
        {session ? (
          <>
            <div>
              <h4>sign in as </h4>
              <div>
                <form onSubmit={createMessage}>
                  <input
                    type="text"
                    value={userMsg}
                    onChange={handleInput}
                    placeholder="Your Message "
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>

              <button onClick={() => signOut()}>
                <span>
                  <AiOutlineGithub size={20} />
                </span>{" "}
                Sign out
              </button>
            </div>
            <div>
              {loading && (
                <ContentLoader
                  speed={2}
                  width="100%"
                  height={160}
                  viewBox="0 0 1024 160"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="-1" y="48" rx="3" ry="3" width="100%" height="40" />
                  <rect x="-1" y="48" rx="3" ry="3" width="100%" height="40" />
                  <rect x="-1" y="48" rx="3" ry="3" width="100%" height="40" />
                </ContentLoader>
              )}
              {message &&
                message.map((item: any, index: number) => (
                  <div key={index}>
                    <p style={{ color: "#525252" }}>{item.username} : </p>

                    <p>{item.message}</p>
                  </div>
                ))}
            </div>
          </>
        ) : (
          <div>
            <div className=" flex flex-col justify-center">
              <h4>Your are not signed in</h4> <br />
              <button
                onClick={() => signIn("github")}
                className=" bg-gray-900 flex flex-row justify-center gap-5 rounded-xl text-white px-5 py-3"
              >
                <span>
                  <AiOutlineGithub size={20} />
                </span>{" "}
                Sign in with Github
              </button>
            </div>
            <div className="mt-10">
              {loading && (
                <ContentLoader
                  speed={2}
                  width="100%"
                  height={160}
                  viewBox="0 0 1024 160"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="-1" y="48" rx="3" ry="3" width="100%" height="40" />
                  <rect x="-1" y="48" rx="3" ry="3" width="100%" height="40" />
                  <rect x="-1" y="48" rx="3" ry="3" width="100%" height="40" />
                </ContentLoader>
              )}
              {message &&
                message.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-row gap-5 bg-secondary p-5 rounded-xl justify-between"
                  >
                    <div className="left flex flex-row gap-5">
                      <p style={{ color: "#525252" }}>{item.username} : </p>
                      <p>{item.message}</p>
                    </div>

                    <p style={{ color: "#525252" }}>{item.created_at}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guestbook;
