import { setLocale, useIntl } from 'umi';
import QueueAnim from 'rc-queue-anim';

import ico1 from '@/assets/count/ico1.png';
import ico2 from '@/assets/count/ico2.png';
import ico3 from '@/assets/count/ico3.png';
import ico4 from '@/assets/count/ico4.png';
import ico5 from '@/assets/count/ico5.png';

const datas = [
  { icon: ico1, count: '10+年', desc: '科创企业服务经验' },
  { icon: ico2, count: '50+', desc: '长三角创意园区' },
  { icon: ico3, count: '100-3800m²', desc: '精装私密空间' },
  { icon: ico4, count: '24h', desc: '全配办公条件' },
  { icon: ico5, count: '10+', desc: '全价值链增值服务' },
];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <section
      style={{
        backgroundColor: '#EAFCFC',
        backgroundImage:
          'url(https://wehome-image.oss-cn-shanghai.aliyuncs.com/a93516c1f0cd1fc12ae26dfaaebb96f4.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto py-5">
        <QueueAnim delay={300} className="flex flex-wrap">
          {datas.map((v, i) => (
            <div
              key={i}
              className="item flex w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl:w-1/5 p-3 items-center"
            >
              <div className="icon">
                <img className="w-16 h-16" src={v.icon} alt="" />
              </div>
              <div className="flex-1 pl-3">
                <div className="text-2xl">{v.count}</div>
                <div className="text-base text-gray-400">{v.desc}</div>
              </div>
            </div>
          ))}
        </QueueAnim>
      </div>
    </section>
  );
}
