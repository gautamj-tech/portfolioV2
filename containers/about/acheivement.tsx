import React, { useState, useEffect } from 'react';
import Title from '@/components/Title';
import Image from 'next/image';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/config/keys';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const Acheivement = () => {
  const [loading, setLoading] = useState(true);
  const [achievements, setAchievements] = useState([]);
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const getAchievementsData = async () => {
    try {
      setLoading(true);
      const { data, error }: any = await supabase

        .from('achivements')
        .select()
        .order('id', { ascending: true });
      setAchievements(data);
      setLoading(false);
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAchievementsData();
  }, []);

  return (
    <div className="mt-20">
      <Title title="Acheivements" />

      <div className="card_container mt-10 flex flex-col gap-5">
        {achievements?.map((achievement: any, index: number) => (
          <Link href={achievement.link} target="_blank">
            <div className="card relative border border-grey-200 dark:border-[#27272a]  card bg-secondary p-10 rounded-2xl grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10 dark:bg-darkBg items-center justify-center">
              <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
              <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
              <div className="imgg  col-span-1 md:col-span-1">
                <Image
                  src={achievement?.image}
                  alt={achievement?.title}
                  width={300}
                  height={300}
                  className=" rounded-xl"
                />
              </div>

              <div className="contents_card flex flex-col gap-5 col-span-1 sm:col-span-1 md:col-span-4">
                <div className="title_card flex flex-col gap-5">
                  <h3 className="text-2xl font-bold">{achievement?.name}</h3>
                  <p className="text-md text-gray-500 dark:text-gray-400">
                    {achievement?.desc}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Acheivement;
