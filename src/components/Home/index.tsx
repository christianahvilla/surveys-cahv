import {
  BarChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Area,
  Line,
  ComposedChart,
  AreaChart,
  LineChart,
} from 'recharts';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import { data } from './mocks/mocks';

const Home = () => {
  return (
    <body className='dark:bg-zinc-800 [&>*]:leading-[1.6]'>
      <Header />
      <Sidebar />
      <div className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60' id='content'>
        <div className='py-12 p-12'>
          <h3 className='my-12 text-[1.75rem] font-medium leading-[1.2] flex justify-self-start text-gray-500'>
            Incio
          </h3>
          <div className='grid grid-cols-2 gap-4 col-gap-4'>
            <div className='col-auto'>
              <div className='rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                <div className='justify-start p-6'>
                  <h5 className='mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50'>
                    Ejemplo de Gráfica
                  </h5>
                  <BarChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#8884d8' />
                    <Bar dataKey='uv' fill='#82ca9d' />
                  </BarChart>
                </div>
              </div>
            </div>
            <div className='col-auto'>
              <div className='rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row'>
                <div className='justify-start p-6'>
                  <h5 className='mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50'>
                    Ejemplo de Gráfica
                  </h5>
                  <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke='#f5f5f5' />
                    <XAxis dataKey='name' scale='band' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
                    <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                    <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                    <Scatter dataKey='cnt' fill='red' />
                  </ComposedChart>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row'>
                <div className='justify-start p-6'>
                  <h5 className='text-xl font-medium text-neutral-800 dark:text-neutral-50'>
                    Ejemplo de Gráfica
                  </h5>
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type='monotone'
                      dataKey='uv'
                      stackId='1'
                      stroke='#8884d8'
                      fill='#8884d8'
                    />
                    <Area
                      type='monotone'
                      dataKey='pv'
                      stackId='1'
                      stroke='#82ca9d'
                      fill='#82ca9d'
                    />
                    <Area
                      type='monotone'
                      dataKey='amt'
                      stackId='1'
                      stroke='#ffc658'
                      fill='#ffc658'
                    />
                  </AreaChart>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row'>
                <div className='justify-start p-6'>
                  <h5 className='text-xl font-medium text-neutral-800 dark:text-neutral-50'>
                    Ejemplo de Gráfica
                  </h5>
                  <LineChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
                    <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
                  </LineChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
