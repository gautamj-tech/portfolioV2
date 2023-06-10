import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Title from "@/components/Title";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/config/keys";

const Experience = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const getWorkData = async () => {
    try {
      setLoading(true);
      const { data, error }: any = await supabase
        .from("work")
        .select()
        .order("id", { ascending: true });
      setWork(data);
      setLoading(false);
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkData();
  }, []);

  return (
    <div className="mt-20">
      <Title title="Work Experiences" />

      <div className="workCard_container mt-10 flex flex-col gap-5 w-full">
        {work?.map((workItem: any, index: number) => (
          <div
            className="card bg-secondary p-10 rounded-2xl flex flex-row justify-between dark:bg-darkBg"
            key={index}
          >
            <div className="left flex flex-col gap-2 ">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {workItem.Company_name}
              </h3>
              <p className="text-gray-600">{workItem.Desc}</p>
            </div>
            <div className="right">
              <p className="text-white bg-gray-900 px-5 py-2 rounded-xl">
                {workItem.startYear} - {workItem.endYear}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;