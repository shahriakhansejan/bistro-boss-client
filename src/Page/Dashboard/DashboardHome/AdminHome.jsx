import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import { GiCook, GiWallet } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Helmet } from "react-helmet-async";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // custom asset for charts
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <>
      <Helmet>
        <title>Bistro | Dashboard</title>
      </Helmet>

      <div className="my-16 px-2">
        <h1 className="text-3xl font-semibold cinzel">Hi, Welcome Back!</h1>

        <div className="text-white flex flex-col w-3/5 gap-2 md:w-full mx-auto md:flex-row justify-between my-6">
          {/* item1 */}
          <div className="flex bg-gradient-to-r from-purple-600 to-purple-300 p-5 rounded-md items-center gap-4">
            <GiWallet className="text-3xl" />
            <span>
              <h1 className="text-2xl font-extrabold">{stats.revenue}</h1>
              <p className="text-lg font-medium">Revenue</p>
            </span>
          </div>
          {/* item2*/}
          <div className="flex bg-gradient-to-r from-[#D3A256] to-[#ecdabf] p-5 rounded-md items-center gap-4">
            <IoIosPeople className="text-3xl" />
            <span>
              <h1 className="text-2xl font-extrabold">{stats.customers}</h1>
              <p className="text-lg font-medium">Customers</p>
            </span>
          </div>
          {/* item3 */}
          <div className="flex bg-gradient-to-r from-red-600 to-red-300 p-5 rounded-md items-center gap-4">
            <GiCook className="text-3xl" />
            <span>
              <h1 className="text-2xl font-extrabold">{stats.products}</h1>
              <p className="text-lg font-medium">Products</p>
            </span>
          </div>
          {/* item4 */}
          <div className="flex bg-gradient-to-r from-blue-600 to-blue-300 p-5 rounded-md items-center gap-4">
            <TbTruckDelivery className="text-3xl" />
            <span>
              <h1 className="text-2xl font-extrabold">{stats.orders}</h1>
              <p className="text-lg font-medium">Orders</p>
            </span>
          </div>
        </div>

        {/* charts part */}
        <div className="bg-white p-5 gap-6 flex flex-col md:flex-row justify-center items-center rounded-md">
          {/* Bar Chart Container */}
          <div className="w-full border-b-2 md:border-b-0 md:border-r-2 md:w-1/2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                padding={{
                  right: 5,
                  left: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar
                  dataKey="quantity"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-purple-400 font-medium mt-4 md:mt-2 mb-2">
              <span className="bg-purple-400 px-2 mr-2">_</span>
              <span className="text-lg">sold</span>
            </p>
          </div>

          {/* Pie Chart Container */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Legend
                  layout="horizontal"
                  verticalAlign="top"
                  align="center"
                />
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius="80%"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

AdminHome.propTypes = {};

export default AdminHome;
